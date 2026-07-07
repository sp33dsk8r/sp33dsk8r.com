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

/** Add entries here as you fill in vacation spots. */
export const vacationSpots: VacationSpot[] = [];
