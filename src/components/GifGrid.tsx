import { useEffect, useState } from 'react';
import { GifInfo } from '../models/gif-info.model';
import GifGridItem from './GifGridItem';
import { getGifs } from '../helpers/get-gifs.helper';

interface GifGridProps {
  category: string;
}

const GifGrid = ({ category }: GifGridProps) => {
  const [images, setImages] = useState<GifInfo[]>([]);

  useEffect(() => {
    getGifs(category).then(imgs => setImages(imgs));
  }, [category]);

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
