import { useFetchGifs } from '../hooks/use-fetch-gifs.hook';
import GifGridItem from './GifGridItem';

interface GifGridProps {
  category: string;
}

const GifGrid = ({ category }: GifGridProps) => {
  const { data, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {loading ? 'Loading...' : data.map(item => <GifGridItem key={item.id} {...item} />)}
      </div>
    </>
  );
};

export default GifGrid;
