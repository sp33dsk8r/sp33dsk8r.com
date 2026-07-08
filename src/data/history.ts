import { googleMapsEmbedUrl, googleMapsUrl, googleMapsDirectionsEmbedUrl, googleMapsDirectionsUrl } from './places';

export type HistoryStop = {
  id: string;
  period: string;
  city?: string;
  location: string;
  notes?: string;
  address?: string;
  hideAddress?: boolean;
  mapType?: 'location' | 'directions';
  directionsFrom?: string;
  directionsTo?: string;
  lat?: number;
  lng?: number;
  zoom?: number;
};

export { googleMapsEmbedUrl, googleMapsUrl, googleMapsDirectionsEmbedUrl, googleMapsDirectionsUrl };

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
    address: '4382 Westridge Drive, Williamsburg, MI 49684',
    hideAddress: true,
    lat: 44.749995,
    lng: -85.484343,
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
    address: '216 Walter Jones Road, Magee, MS 39111',
    hideAddress: true,
    lat: 31.831112,
    lng: -89.713812,
    zoom: 18,
  },
  {
    id: 'mississippi-1995-jackson',
    period: '1995',
    city: 'Jackson',
    location: 'Mississippi',
    notes: 'Worked in Jackson — commute from Magee, roughly 45 miles from Magee and 90 miles from Petal.',
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
    id: 'mississippi-1996-ridgeland',
    period: '1996',
    city: 'Ridgeland',
    location: 'Mississippi',
    notes: 'Worked in Ridgeland — all work was local to Ridgeland.',
    lat: 32.4282,
    lng: -90.1323,
    zoom: 12,
  },
  {
    id: 'texas-1996-houston',
    period: 'Aug 1996–Dec 1998',
    city: 'Houston',
    location: 'Texas',
    notes: 'Based in 77084. Working 7/7 out of Grand Isle, LA.',
    mapType: 'directions',
    directionsFrom: 'Houston, TX 77084',
    directionsTo: 'Grand Isle, LA',
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
