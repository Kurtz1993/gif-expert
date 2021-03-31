import { GifInfo } from '../models/gif-info.model';

export default function GifGridItem({ title, url }: GifInfo) {
  return (
    <div className="card">
      <img className="card__img" src={url} alt={title} />
      <p className="card__title">{title}</p>
    </div>
  );
}
