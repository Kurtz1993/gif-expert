import { useEffect } from 'react';
import { GifInfo } from '../models/gif-info.model';

interface GifGridProps {
  category: string;
}

const GifGrid = ({ category }: GifGridProps) => {
  const getGifs = async () => {
    const url =
      'http://api.giphy.com/v1/gifs/search?q=cat&limit=10&api_key=LiWX0vBkAbyAkHX78VEtAJClxwtIKPwK';

    const resp = await fetch(url);
    const { data } = (await resp.json()) as { data: GifInfo[] };
    const gifs = data.map(item => new GifInfo(item));

    console.log(gifs);
  };

  useEffect(() => {
    getGifs();
  }, []);

  return (
    <div>
      <h3>{category}</h3>
    </div>
  );
};

export default GifGrid;
