export type FamilyPhoto = {
  src: string;
  alt: string;
  caption: string;
  rotate?: 'cw' | 'ccw';
};

export const familyPhotos: FamilyPhoto[] = [
  {
    src: 'dad.jpeg',
    alt: 'Dad enjoying a home-cooked meal at the dining table',
    caption: 'Dad',
    rotate: 'cw',
  },
];
