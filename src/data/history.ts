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
    address: '318 38th Street, Hattiesburg, MS 39401',
    hideAddress: true,
    lat: 31.329423,
    lng: -89.345627,
    zoom: 18,
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
    id: 'mississippi-1995-petal',
    period: '1995',
    city: 'Petal',
    location: 'Mississippi',
    notes: 'Hattiesburg area',
    address: '417 Old Corinth Road, Petal, MS 39465',
    hideAddress: true,
    lat: 31.350266,
    lng: -89.24359,
    zoom: 18,
  },
  {
    id: 'mississippi-1996-ridgeland',
    period: '1996',
    city: 'Ridgeland',
    location: 'Mississippi',
    notes: "Worked in Ridgeland at New Orleans Cafe for a few months... had to leave Mississippi... it's HOMO... home of minimal opportunities",
    address: '5764 Imperial Drive, Jackson, MS 39211',
    hideAddress: true,
    lat: 32.375864,
    lng: -90.121458,
    zoom: 18,
  },
  {
    id: 'texas-1996-houston',
    period: 'August 1996 - June 1999',
    city: 'Houston',
    location: 'Texas',
    notes: 'Based in 77084. Working 7/7 out of Grand Isle, LA.',
    hideAddress: true,
    lat: 29.8186944,
    lng: -95.6978611,
    zoom: 18,
  },
  {
    id: 'texas-1999-copperfield',
    period: '1999–2003',
    city: 'Copperfield',
    location: 'Texas',
    notes: 'Westmount at Copper Mill — corner first-floor unit across from the office.',
    address: 'Westmount at Copper Mill, Houston, TX',
    lat: 29.8792,
    lng: -95.6497,
    zoom: 17,
  },
  {
    id: 'texas-2004-houston',
    period: '2004–2005',
    city: 'Houston',
    location: 'Texas',
    notes: 'Retooling',
    hideAddress: true,
    lat: 29.8186944,
    lng: -95.6978611,
    zoom: 18,
  },
  {
    id: 'texas-2005-tomball',
    period: '2005–2007',
    city: 'Tomball',
    location: 'Texas',
    notes: '2005–2006: parked at Spring Creek. 2007: 316 Cherry St.',
    address: '316 Cherry St, Tomball, TX',
    hideAddress: true,
    lat: 30.095594,
    lng: -95.615119,
    zoom: 18,
  },
  {
    id: 'texas-2008-tomball',
    period: '2008–2009',
    city: 'Tomball',
    location: 'Texas',
    notes: 'Retooling',
    address: '920 Lawrence St, Tomball, TX',
    hideAddress: true,
    lat: 30.084364,
    lng: -95.626038,
    zoom: 18,
  },
  {
    id: 'texas-2010-houston',
    period: '2010–2020',
    city: 'Houston',
    location: 'Texas',
    notes: 'Energy corridor west',
    hideAddress: true,
    lat: 29.8186944,
    lng: -95.6978611,
    zoom: 18,
  },
  {
    id: 'texas-1996-present',
    period: '2021–present',
    city: 'Katy',
    location: 'Texas',
    notes: 'Katy / Houston metro area',
    hideAddress: true,
    lat: 29.82279669984268,
    lng: -95.80327358631828,
    zoom: 18,
  },
];
