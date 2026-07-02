declare global {
  interface Window {
    __bikingMapsLoader?: Promise<void>;
    google?: {
      maps: {
        Map: new (element: HTMLElement, options: Record<string, unknown>) => unknown;
        Marker: new (options: Record<string, unknown>) => unknown;
        BicyclingLayer: new () => { setMap: (map: unknown) => void };
        MapTypeId: { HYBRID: string };
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

    const fallback = element.parentElement?.querySelector<HTMLElement>('[data-map-fallback]');
    if (fallback) {
      fallback.hidden = true;
    }

    element.hidden = false;
  });
}
