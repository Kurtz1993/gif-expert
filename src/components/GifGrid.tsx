import { FunctionComponent } from 'react';
import { useFetchGifs } from '../hooks/use-fetch-gifs.hook';
import GifGridItem from './GifGridItem';

interface GifGridProps {
  category: string;
}

const GifGrid: FunctionComponent<GifGridProps> = ({ category }) => {
  const { images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {loading ? 'Loading...' : images.map(item => <GifGridItem key={item.id} {...item} />)}
      </div>
    </>
  );
};

export default GifGrid;
