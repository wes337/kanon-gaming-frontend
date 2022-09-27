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
