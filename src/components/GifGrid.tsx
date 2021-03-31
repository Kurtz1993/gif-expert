import { useEffect, useState } from 'react';
import { GifInfo } from '../models/gif-info.model';
import GifGridItem from './GifGridItem';

interface GifGridProps {
  category: string;
}

const GifGrid = ({ category }: GifGridProps) => {
  const [images, setImages] = useState<GifInfo[]>([]);

  const getGifs = async () => {
    const apiKey = process.env.REACT_APP_GIPHY_APIKEY;
    const url = `http://api.giphy.com/v1/gifs/search?q=One%20Punch&limit=10&api_key=${apiKey}`;

    const resp = await fetch(url);
    const { data } = (await resp.json()) as { data: GifInfo[] };
    const gifs = data.map(item => new GifInfo(item));

    setImages(gifs);
  };

  useEffect(() => {
    getGifs();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map(item => (
          <GifGridItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
