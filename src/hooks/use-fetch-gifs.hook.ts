import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/get-gifs.helper';
import { GifInfo } from '../models/gif-info.model';

export function useFetchGifs(category: string) {
  const [state, setState] = useState({
    images: [] as GifInfo[],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then(imgs => {
      setState({ images: imgs, loading: false });
    });
  }, [category]);

  return state;
}
