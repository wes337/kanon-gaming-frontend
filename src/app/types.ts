export type Country = {
  name: {
    official: string;
    common: string;
  };
  flags: {
    svg: string;
    png: string;
  };
  population: number;
  capital: string;
  region: string;
  subregion: string;
  languages: {
    [languageCode: string]: {
      name: string;
      nativeName: string;
    };
  };
};

export type Countries = Country[];

export const FRUIT = {
  CHERRY: "cherry",
  LEMON: "lemon",
  APPLE: "apple",
  BANANA: "banana",
} as const;

const fruits = Object.values(FRUIT);
export type Fruit = typeof fruits[number];
export type Spin = [Fruit | null, Fruit | null, Fruit | null];

export const APP = {
  REST_COUNTRIES: "Rest Countries",
  SLOT_MACHINE: "Slot Machine",
  SQL: "SQL Questions",
  HOME: "Home",
} as const;

const appNames = Object.values(APP);
export type AppName = typeof appNames[number];
