import { TryCatchAsync } from "tiinvo";

const client = {
  get: () => fetch("https://restcountries.eu/rest/v2")
};

export interface ICountry {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  region: string;
  subregion: string;
  population: number[];
  latlng: number[];
  demonym: string;
  area: number;
  gini: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  currencies: Array<{
    code: string;
    name: string;
    symbol: string;
  }>;
  languages: Array<{
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  }>;
  translations: Record<string, string>;
  flag: string;
  regionalBlocs: Array<{
    acronym: string;
    name: string;
    otherAcronyms: string[];
    otherNames: string[];
  }>;
  cioc: string;
}

const ok = async (response: Response) =>
  response
    .json()
    .then(a => a)
    .catch(err);
const err = async () => [];

function memoizedall() {
  let cache: ICountry[] = [];

  return async () => {
    if (cache.length === 0) {
      const response = await TryCatchAsync(client.get, "/all");
      const result = await response.mapOrElse(err, ok);
      cache = result;
    }

    return cache;
  };
}

export const all = memoizedall();

export async function search(name: string = ""): Promise<ICountry[]> {
  const response = await TryCatchAsync(client.get, "/name/" + name);
  return response.mapOrElse(err, ok);
}
