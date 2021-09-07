export type BreedsListResponse = {
  [key: string] : string[]
}

export type RandomImagesRespose = string[];

export enum URLs {
  ALL_BREEDS = "https://dog.ceo/api/breeds/list/all",
  BREED_BASE = "https://dog.ceo/api/breed/"
}

