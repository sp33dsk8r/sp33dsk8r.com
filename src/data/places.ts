export type Park = {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  zoom?: number;
  description: string;
};

export function googleMapsEmbedUrl(lat: number, lng: number, zoom = 14): string {
  return `https://www.google.com/maps?q=${lat},${lng}&hl=en&z=${zoom}&output=embed`;
}

export function googleMapsUrl(lat: number, lng: number, zoom = 14): string {
  return `https://www.google.com/maps/@${lat},${lng},${zoom}z/data=!5m1!1e4`;
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
