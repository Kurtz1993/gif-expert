import { FunctionComponent } from 'react';
import { GifInfo } from '../models/gif-info.model';

const GifGridItem: FunctionComponent<GifInfo> = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <img className="card__img" src={url} alt={title} />
      <p className="card__title">{title}</p>
    </div>
  );
};

export default GifGridItem;
