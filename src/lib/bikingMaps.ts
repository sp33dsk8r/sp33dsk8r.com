declare global {
  interface Window {
    __bikingMapsLoader?: Promise<void>;
    google?: {
      maps: {
        Map: new (element: HTMLElement, options: Record<string, unknown>) => unknown;
        Marker: new (options: Record<string, unknown>) => unknown;
        BicyclingLayer: new () => { setMap: (map: unknown) => void };
        MapTypeId: { HYBRID: string; SATELLITE: string };
        Geocoder: new () => {
          geocode: (
            request: { address: string },
            callback: (
              results: Array<{
                geometry: { location: { lat: () => number; lng: () => number } };
              }> | null,
              status: string,
            ) => void,
          ) => void;
        };
        DirectionsService: new () => {
          route: (
            request: { origin: string; destination: string; travelMode: string },
            callback: (
              result: {
                routes: Array<{
                  legs: Array<{ duration: { text: string }; distance: { text: string } }>;
                }>;
              } | null,
              status: string,
            ) => void,
          ) => void;
        };
        DirectionsRenderer: new (options: Record<string, unknown>) => {
          setDirections: (directions: unknown) => void;
          setMap: (map: unknown) => void;
        };
        TravelMode: { DRIVING: string };
      };
    };
  }
}

function loadGoogleMaps(apiKey: string): Promise<void> {
  if (window.__bikingMapsLoader) {
    return window.__bikingMapsLoader;
  }

  window.__bikingMapsLoader = new Promise((resolve, reject) => {
    if (window.google?.maps) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&v=weekly`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Google Maps'));
    document.head.appendChild(script);
  });

  return window.__bikingMapsLoader;
}

const HIDE_LABEL_STYLES = [
  { featureType: 'all', elementType: 'labels.text', stylers: [{ visibility: 'off' }] },
  { featureType: 'all', elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
];

function shouldHideLabels(element: HTMLElement): boolean {
  return element.dataset.hideLabels === 'true';
}

export async function initBikingMaps(apiKey: string): Promise<void> {
  const containers = document.querySelectorAll<HTMLElement>('[data-biking-map]');
  if (!containers.length || !apiKey) {
    return;
  }

  await loadGoogleMaps(apiKey);

  if (!window.google?.maps) {
    return;
  }

  containers.forEach((element) => {
    const lat = Number(element.dataset.lat);
    const lng = Number(element.dataset.lng);
    const zoom = Number(element.dataset.zoom ?? 14);

    if (Number.isNaN(lat) || Number.isNaN(lng)) {
      return;
    }

    const map = new window.google.maps.Map(element, {
      center: { lat, lng },
      zoom,
      mapTypeId: window.google.maps.MapTypeId.HYBRID,
      disableDefaultUI: true,
      zoomControl: true,
      fullscreenControl: true,
      gestureHandling: 'cooperative',
    });

    new window.google.maps.BicyclingLayer().setMap(map);
    new window.google.maps.Marker({
      position: { lat, lng },
      map,
    });

    revealMap(element);
  });
}

export async function initSatelliteMaps(
  apiKey: string,
  privateGeocodeById: Record<string, string> = {},
): Promise<void> {
  const containers = document.querySelectorAll<HTMLElement>('[data-satellite-map]');
  if (!containers.length || !apiKey) {
    return;
  }

  await loadGoogleMaps(apiKey);

  if (!window.google?.maps) {
    return;
  }

  containers.forEach((element) => {
    if (shouldHideLabels(element)) {
      return;
    }

    const lat = Number(element.dataset.lat);
    const lng = Number(element.dataset.lng);
    const zoom = Number(element.dataset.zoom ?? 14);
    const mapId = element.dataset.mapId?.trim();
    const address =
      (mapId && privateGeocodeById[mapId]) || element.dataset.address?.trim() || '';

    const renderMap = (center: { lat: number; lng: number }) => {
      const map = new window.google!.maps.Map(element, {
        center,
        zoom,
        mapTypeId: window.google!.maps.MapTypeId.SATELLITE,
        disableDefaultUI: true,
        zoomControl: true,
        fullscreenControl: true,
        gestureHandling: 'cooperative',
        clickableIcons: false,
        ...(shouldHideLabels(element) ? { styles: HIDE_LABEL_STYLES } : {}),
      });

      new window.google!.maps.Marker({
        position: center,
        map,
      });

      revealMap(element);
    };

    if (address) {
      new window.google!.maps.Geocoder().geocode({ address }, (results, status) => {
        if (status === 'OK' && results?.[0]) {
          const location = results[0].geometry.location;
          renderMap({ lat: location.lat(), lng: location.lng() });
          return;
        }

        if (!Number.isNaN(lat) && !Number.isNaN(lng)) {
          renderMap({ lat, lng });
        }
      });
      return;
    }

    if (Number.isNaN(lat) || Number.isNaN(lng)) {
      return;
    }

    renderMap({ lat, lng });
  });
}

export async function initDirectionsMaps(apiKey: string): Promise<void> {
  const containers = document.querySelectorAll<HTMLElement>('[data-directions-map]');
  if (!containers.length || !apiKey) {
    return;
  }

  await loadGoogleMaps(apiKey);

  if (!window.google?.maps) {
    return;
  }

  containers.forEach((element) => {
    const origin = element.dataset.origin?.trim();
    const destination = element.dataset.destination?.trim();
    const timeEl = element.closest('figure')?.querySelector<HTMLElement>('[data-directions-time]');

    if (!origin || !destination) {
      return;
    }

    const map = new window.google!.maps.Map(element, {
      mapTypeId: window.google!.maps.MapTypeId.HYBRID,
      disableDefaultUI: true,
      zoomControl: true,
      fullscreenControl: true,
      gestureHandling: 'cooperative',
    });

    const directionsRenderer = new window.google!.maps.DirectionsRenderer({
      map,
      suppressMarkers: false,
      preserveViewport: false,
    });

    new window.google!.maps.DirectionsService().route(
      {
        origin,
        destination,
        travelMode: window.google!.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status !== 'OK' || !result?.routes[0]?.legs[0]) {
          return;
        }

        directionsRenderer.setDirections(result);

        const leg = result.routes[0].legs[0];
        if (timeEl) {
          timeEl.textContent = `${leg.duration.text} drive · ${leg.distance.text}`;
        }

        revealMap(element);
      },
    );
  });
}

function revealMap(element: HTMLElement): void {
  const fallback = element.parentElement?.querySelector<HTMLElement>('[data-map-fallback]');
  if (fallback) {
    fallback.hidden = true;
  }

  element.hidden = false;
}
