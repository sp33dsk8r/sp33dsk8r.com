export type FamilyPhoto = {
  src: string;
  webp: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const familyPhotos: FamilyPhoto[] = [
  {
    src: 'dad.jpeg',
    webp: 'dad.webp',
    alt: 'Dad at home in a plaid shirt',
    caption: 'Dad',
    width: 900,
    height: 675,
  },
];
