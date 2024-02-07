import { ComponentProps, FC } from 'react';
import { Link, generatePath } from 'react-router-dom';
import { TArtist, TSong } from '@core/search/domain/models/Search.model';
import styles from './List.module.scss';
import { ARTIST, TRACK } from '@/constants/routes';

interface IListProps extends ComponentProps<'ul'> {
  songs: TSong[];
  artists: TArtist[];
}

const List: FC<IListProps> = ({ songs, artists, ...rest }) => (
  <ul className={styles.container} {...rest}>
    <div className={styles.top}>
      <p className={styles.top__title}>SEARCH RESULTS</p>
    </div>

    <section className={styles.section}>
      <p className={styles.section__title}>SONGS</p>

      {songs.map(({ name, artist_name, image_thumbnail, id }) => (
        <li className={styles.section__item_song} key={id}>
          <Link to={generatePath(TRACK, { id: `${id}`, name })}>
            <img className={styles.thumbnail_song} src={image_thumbnail} alt={`${name} thumbnail`} />
            <div>
              <p className={styles.name_song}>{name}</p>
              <p className={styles.owner_song}>{artist_name}</p>
            </div>
          </Link>
        </li>
      ))}
    </section>

    <section className={styles.section}>
      <span className={styles.section__title}>ARTISTS</span>

      {artists.map(({ name, image_thumbnail, id }) => (
        <li className={styles.section__item_artist} key={id}>
          <Link to={generatePath(ARTIST, { id: `${id}`, name })}>
            <img className={styles.thumbnail_artist} src={image_thumbnail} alt={`${name} thumbnail`} />
            <p>{name}</p>
          </Link>
        </li>
      ))}
    </section>
  </ul>
);

export default List;
