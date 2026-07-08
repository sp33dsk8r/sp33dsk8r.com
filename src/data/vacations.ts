export type VacationSpot = {
  id: string;
  name: string;
  location: string;
  when?: string;
  description: string;
  highlights?: string[];
  lat?: number;
  lng?: number;
  zoom?: number;
};

export function googleMapsEmbedUrl(lat: number, lng: number, zoom = 12): string {
  return `https://www.google.com/maps?q=${lat},${lng}&hl=en&z=${zoom}&output=embed`;
}

export function googleMapsUrl(lat: number, lng: number, zoom = 12): string {
  return `https://www.google.com/maps/@${lat},${lng},${zoom}z`;
}

const MONTH_ORDER: Record<string, number> = {
  Jan: 1,
  Feb: 2,
  Mar: 3,
  Apr: 4,
  May: 5,
  Jun: 6,
  Jul: 7,
  Aug: 8,
  Sep: 9,
  Oct: 10,
  Nov: 11,
  Dec: 12,
};

/** Parses values like "Jul 2024" into a sortable key (newer = larger). */
export function whenSortKey(when?: string): number {
  if (!when) return 0;

  const match = when.trim().match(/^([A-Za-z]{3})\s+(\d{4})$/);
  if (!match) return 0;

  const month = MONTH_ORDER[match[1]] ?? 0;
  return Number(match[2]) * 100 + month;
}

export function sortVacationSpotsByWhenDesc(spots: VacationSpot[]): VacationSpot[] {
  return [...spots].sort((a, b) => whenSortKey(b.when) - whenSortKey(a.when));
}

export const vacationSpots: VacationSpot[] = [
  {
    id: 'great-wolf-grapevine-2026',
    name: 'Great Wolf Resort',
    location: 'Grapevine, TX',
    when: 'Jul 2026',
    description:
      'Great for toddlers and young ones. Lots of things to do for the family.',
    highlights: ['Indoor/Outdoor water park'],
    lat: 32.9346,
    lng: -97.0789,
  },
  {
    id: 'great-wolf-grapevine-2023',
    name: 'Great Wolf Resort',
    location: 'Grapevine, TX',
    when: 'Dec 2023',
    description:
      'Great for toddlers and young ones. Took the 10 yo this time. Lots of things to do for the family.',
    highlights: ['Indoor water park'],
    lat: 32.9346,
    lng: -97.0789,
  },
  {
    id: 'seaworld-aquatica-san-antonio-2024',
    name: 'SeaWorld / Aquatica',
    location: 'San Antonio, TX',
    when: 'Jul 2024',
    description:
      'Water park, sea animal exhibits, and amusement park-style rides.',
    highlights: ['Water park', 'Sea animals', 'Amusement park rides'],
    lat: 29.4564,
    lng: -98.6997,
  },
  {
    id: 'jamaica-beach-galveston-2023',
    name: 'Jamaica Beach / Galveston',
    location: 'Galveston, TX',
    when: 'Jul 2023',
    description:
      'Went with family at a B&amp;B. Good time — kids need to be a little older.',
    highlights: ['Beach', 'Parade', 'Grilling / BBQ'],
    lat: 29.1897,
    lng: -94.9799,
  },
];
