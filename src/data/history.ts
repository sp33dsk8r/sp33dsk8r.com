import { googleMapsEmbedUrl, googleMapsUrl } from './places';

export type HistoryStop = {
  id: string;
  period: string;
  city?: string;
  location: string;
  notes?: string;
  lat?: number;
  lng?: number;
  zoom?: number;
};

export { googleMapsEmbedUrl, googleMapsUrl };

export const historyStops: HistoryStop[] = [
  {
    id: 'mississippi-born',
    period: '—',
    location: 'Mississippi',
    notes: 'Born and raised',
  },
  {
    id: 'michigan-1989-1992',
    period: '1989–1992',
    location: 'Michigan',
  },
  {
    id: 'mississippi-1992',
    period: '1992',
    location: 'Mississippi',
    notes: 'Moved back for 6 months',
  },
  {
    id: 'michigan-1993-1994',
    period: '1993–1994',
    location: 'Michigan',
  },
  {
    id: 'mississippi-1994-1996',
    period: '1994–1996',
    location: 'Mississippi',
  },
  {
    id: 'texas-1996-present',
    period: '1996–present',
    city: 'Katy',
    location: 'Texas',
    notes: 'Katy / Houston metro area',
    lat: 29.7858,
    lng: -95.8244,
  },
];
