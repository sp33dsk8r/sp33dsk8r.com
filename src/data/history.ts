import { googleMapsEmbedUrl, googleMapsUrl } from './places';

export type HistoryStop = {
  id: string;
  period: string;
  city?: string;
  location: string;
  notes?: string;
  address?: string;
  hideAddress?: boolean;
  lat?: number;
  lng?: number;
  zoom?: number;
};

export { googleMapsEmbedUrl, googleMapsUrl };

export const historyStops: HistoryStop[] = [
  {
    id: 'mississippi-born',
    period: '—',
    city: 'Soso',
    location: 'Mississippi',
    notes: 'Born and raised',
    address: '3282 Hwy 29 N, Soso, MS 39480',
    lat: 31.748094,
    lng: -89.27475,
    zoom: 18,
  },
  {
    id: 'michigan-1989-1992',
    period: '1989–1992',
    city: 'Williamsburg',
    location: 'Michigan',
    address: '6482 Westridge Drive, Williamsburg, MI 49690',
    hideAddress: true,
    lat: 44.758,
    lng: -85.4845,
    zoom: 18,
  },
  {
    id: 'mississippi-1992',
    period: '1992',
    city: 'Hattiesburg',
    location: 'Mississippi',
    notes: 'Moved back for 6 months',
    lat: 31.3271,
    lng: -89.2903,
  },
  {
    id: 'michigan-1993-1994',
    period: '1993–1994',
    city: 'Traverse City',
    location: 'Michigan',
    lat: 44.7631,
    lng: -85.6206,
  },
  {
    id: 'mississippi-1994-magee',
    period: 'Aug 1994',
    city: 'Magee',
    location: 'Mississippi',
    lat: 31.8738,
    lng: -89.7337,
  },
  {
    id: 'mississippi-1995-jackson',
    period: '1995',
    city: 'Jackson',
    location: 'Mississippi',
    notes: 'Worked in Jackson — roughly 45 miles from Magee and 90 miles from Petal.',
    lat: 32.2988,
    lng: -90.1848,
    zoom: 10,
  },
  {
    id: 'mississippi-1995-petal',
    period: '1995',
    city: 'Petal',
    location: 'Mississippi',
    notes: 'Hattiesburg area',
    lat: 31.3466,
    lng: -89.2601,
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
