import { GifInfo } from '../models/gif-info.model';

export const getGifs = async (category: string) => {
  const apiKey = process.env.REACT_APP_GIPHY_APIKEY;
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=${apiKey}`;

  const resp = await fetch(url);
  const { data } = (await resp.json()) as { data: GifInfo[] };
  const gifs = data.map(item => new GifInfo(item));

  return gifs;
};
