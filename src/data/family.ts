export type FamilyPhoto = {
  src: string;
  alt: string;
  caption: string;
  rotate?: 'cw' | 'ccw';
};

export const familyPhotos: FamilyPhoto[] = [
  {
    src: 'dad.jpeg',
    alt: 'Dad at home in a plaid shirt',
    caption: 'Dad',
  },
];
