import axios from "axios";
import {URLs, BreedsListResponse, RandomImagesRespose} from "../types/api"

const getBreedsList = async () => {
  try {
    const response = await axios.get(URLs.ALL_BREEDS);
    const {data} = response;
    return data.message as BreedsListResponse;
  } catch (error) {
    throw new Error("Could not load breeds");
  }
}

const getRandomImgs = async (breed: string) => {
  try {
    const url = `${URLs.BREED_BASE}/${breed}/images`;
    const response = await axios.get(url);
    const {data} = response;
    return data.message as RandomImagesRespose;
  } catch (error) {
    throw new Error("Could not load random images");
  }
}

export default {
  getBreedsList,
  getRandomImgs
}