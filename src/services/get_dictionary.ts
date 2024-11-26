import { AxiosService } from '@shared/react/services';

export { default as GET_DICTIONARY_MOCK } from './__mocks__/get_dictionary.response.json';

export interface Phonetic {
  audio: string;
  license?: License;
  sourceUrl?: string;
  text: string;
}

export interface License {
  name: string;
  url: string;
}

export interface Meaning {
  antonyms: string[];
  definitions: Definition[];
  partOfSpeech: string;
  synonyms: string[];
}

export interface Definition {
  antonyms: string[];
  definition: string;
  example?: string;
  synonyms: string[];
}

export interface License2 {
  name: string;
  url: string;
}

export interface ServiceResponse {
  license: License2;
  meanings: Meaning[];
  phonetic: string;
  phonetics: Phonetic[];
  sourceUrls: string[];
  word: string;
}

export const GET_DICTIONARY = new AxiosService<never, never, ServiceResponse[]>({
  baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en/',
  key: 'dictionary',
  method: 'GET',
});
