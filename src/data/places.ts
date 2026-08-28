export type Park = {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  zoom?: number;
  description: string;
};

export function googleMapsStaticSatelliteUrl(
  lat: number,
  lng: number,
  zoom: number,
  apiKey: string,
  width = 640,
  height = 360,
): string {
  const marker = `color:red%7C${lat},${lng}`;
  const labelStyles = [
    'style=feature:all|element:labels.text|visibility:off',
    'style=feature:all|element:labels.icon|visibility:off',
  ].join('&');
  return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=${width}x${height}&scale=2&maptype=satellite&markers=${marker}&${labelStyles}&key=${encodeURIComponent(apiKey)}`;
}

export function googleMapsEmbedUrl(
  lat: number,
  lng: number,
  zoom = 14,
  mapType: 'roadmap' | 'satellite' | 'hybrid' = 'roadmap',
  query?: string,
): string {
  const typeParam =
    mapType === 'satellite' ? '&t=k' : mapType === 'hybrid' ? '&t=h' : '';
  if (query) {
    return `https://www.google.com/maps?q=${encodeURIComponent(query)}&hl=en&z=${zoom}${typeParam}&output=embed`;
  }
  return `https://maps.google.com/maps?q=loc:${lat},${lng}&ll=${lat},${lng}&z=${zoom}${typeParam}&output=embed`;
}

export function googleMapsUrl(lat: number, lng: number, zoom = 14, query?: string): string {
  if (query) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  }
  return `https://www.google.com/maps/@${lat},${lng},${zoom}z`;
}

export function googleMapsStreetViewEmbedUrl(
  lat: number,
  lng: number,
  apiKey?: string,
  heading = 0,
  location?: string,
  fov = 90,
): string {
  const streetViewLocation = location ?? `${lat},${lng}`;

  if (apiKey) {
    return `https://www.google.com/maps/embed/v1/streetview?key=${encodeURIComponent(apiKey)}&location=${encodeURIComponent(streetViewLocation)}&heading=${heading}&pitch=0&fov=${fov}`;
  }

  const query = location ? encodeURIComponent(location) : '';
  const zoom = Math.max(0, Math.round((120 - fov) / 15));
  return `https://maps.google.com/maps?q=${query}&layer=c&cbll=${lat},${lng}&cbp=12,${heading},0,${zoom},0&hl=en&ie=UTF8&hq=&output=svembed`;
}

export function googleMapsStreetViewUrl(
  lat: number,
  lng: number,
  heading = 0,
  location?: string,
  fov = 90,
): string {
  if (location) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}&layer=c&heading=${heading}&fov=${fov}`;
  }

  return `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${lat},${lng}&heading=${heading}&pitch=0&fov=${fov}`;
}

export function googleMapsDirectionsUrl(origin: string, destination: string): string {
  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=driving`;
}

export function googleMapsDirectionsEmbedUrl(
  origin: string,
  destination: string,
  apiKey?: string,
): string {
  if (apiKey) {
    return `https://www.google.com/maps/embed/v1/directions?key=${encodeURIComponent(apiKey)}&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&mode=driving`;
  }

  return `https://maps.google.com/maps?f=d&saddr=${encodeURIComponent(origin)}&daddr=${encodeURIComponent(destination)}&output=embed`;
}

export const parks: Park[] = [
  {
    id: 'john-paul-landing',
    name: 'John Paul Landing Park',
    address: '24202 West Road, Cypress, TX 77433',
    lat: 29.9056442,
    lng: -95.7909536,
    description:
      'Skating on both the <strong>FR1</strong> and <strong>EdgeTek</strong> — a solid spot when I want pavement and room to roll on different setups.',
  },
  {
    id: 'bear-creek',
    name: 'Bear Creek Park',
    address: '3535 War Memorial Street, Houston, TX 77084',
    lat: 29.824784,
    lng: -95.6247,
    description:
      'My usual loop runs out to the <strong>soccer fields</strong>, with <strong>Clay to Patterson</strong> as part of the route. A dependable Bear Creek session when I want a familiar loop without leaving the west side.',
  },
  {
    id: 'terry-hershey',
    name: 'Terry Hershey Park',
    address: '15200 Memorial Drive, Houston, TX 77079',
    lat: 29.7671,
    lng: -95.6189,
    description:
      'I split the park by section: <strong>west</strong> for <strong>cycling</strong>, <strong>east toward Beltway 8</strong> for <strong>skating</strong>. Long, popular bayou corridor — different vibes and surfaces depending on which end you start from.',
  },
  {
    id: 'george-bush',
    name: 'George Bush Park',
    address: '16756 Westheimer Parkway, Houston, TX 77082',
    lat: 29.7461,
    lng: -95.6872,
    zoom: 13,
    description:
      'Often tied into a bigger day: through <strong>Terry Hershey Park and back</strong> is about <strong>40 miles</strong> — a serious endurance ride when the legs (and schedule) allow.',
  },
  {
    id: 'cullen-park',
    name: 'Cullen Park Trail',
    address: '19008 Saums Road, Houston, TX 77084',
    lat: 29.7998,
    lng: -95.7008,
    zoom: 15,
    description:
      'The trail surface <strong>sucks for skates</strong>, but it\'s where I skated the <strong>most</strong> — <strong>every day</strong>, sometimes <strong>twice a day</strong>, because it was so close. Chewed up my wheels; sometimes had to <strong>jump fallen branches</strong>. <strong>Biking</strong> is better on the <strong>Scorpion</strong>; the <strong>V20</strong> is solid here too.',
  },
];
