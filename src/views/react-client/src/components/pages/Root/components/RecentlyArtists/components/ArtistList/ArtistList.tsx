import { ComponentProps, FC } from 'react';
import { Link, generatePath } from 'react-router-dom';
import { ARTIST } from '@/constants/routes';
import styles from './ArtistList.module.scss';
import { TArtist } from '@core/search/domain/models/Search.model';

interface IArtistListProps extends ComponentProps<'ul'> {
  artists: TArtist[] | undefined;
}

const ArtistList: FC<IArtistListProps> = ({ artists }) => (
  <ul className={styles.container}>
    {artists?.map(({ id, name, image_thumbnail }) => (
      <li key={id}>
        <Link className={styles.artist} to={generatePath(ARTIST, { id: `${id}`, name })}>
          <img className={styles.artist__thumbnail} src={image_thumbnail} alt='album thumbnail' />
          <p className={styles.artist__name}>{name}</p>
        </Link>
      </li>
    ))}
  </ul>
);

export default ArtistList;
