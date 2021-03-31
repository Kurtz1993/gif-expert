import { GifInfo } from '../models/gif-info.model';

export default function GifGridItem({ title, url }: GifInfo) {
  return (
    <div>
      <img src={url} alt={title} />
    </div>
  );
}
