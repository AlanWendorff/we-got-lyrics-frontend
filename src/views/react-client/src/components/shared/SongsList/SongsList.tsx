import { ComponentProps, FC } from 'react';
import { Link, generatePath } from 'react-router-dom';
import { SONG } from '@/constants/routes';
import { TSongs } from '@core/artistInfo/domain/models/ArtistSongs.model';
import styles from './SongsList.module.scss';

interface ISongsListProps extends ComponentProps<'ul'> {
  songs: TSongs[] | undefined;
}

const SongsList: FC<ISongsListProps> = ({ songs }) => (
  <ul className={styles.container}>
    {songs?.map(({ id, thumbnail_url, title, artist }, key) => (
      <li key={id}>
        <Link className={styles.song} to={generatePath(SONG, { id: `${id}`, name: title })}>
          <p className={styles.song__number}>{key + 1}</p>
          <img className={styles.song__thumbnail} src={thumbnail_url} alt='album thumbnail' />
          <div className={styles.song__info}>
            <p className={styles.song__info_title}>{title}</p>
            <p className={styles.song__info_artist}>{artist}</p>
          </div>
        </Link>
      </li>
    ))}
  </ul>
);

export default SongsList;
