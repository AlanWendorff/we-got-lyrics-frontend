import { Dispatch, FC, SetStateAction } from 'react';
import { Link, generatePath } from 'react-router-dom';
import { SONG } from '@/constants/routes';
import { TSongs } from '@core/artistInfo/domain/models/ArtistSongs.model';
import styles from './PopularSongs.module.scss';
import PopularSongsSkeleton from './PopularSongs.skeleton';

interface IPopularSongs {
  songs: TSongs[] | undefined;
  artistName: string | undefined;
  artistId: string | undefined;
  setScreenStatus: Dispatch<SetStateAction<boolean>>;
}

const PopularSongs: FC<IPopularSongs> = ({ songs, artistName, setScreenStatus }) => {
  if (!songs) {
    return <PopularSongsSkeleton />;
  }

  return (
    <div className={styles.container}>
      <p className={styles.title}>POPULAR {artistName} CHARTS</p>

      {songs.map(({ id, thumbnail_url, title, artist }, key) => (
        <Link key={id} className={styles.song} to={generatePath(SONG, { id: `${id}`, name: title })}>
          <p className={styles.song__number}>{key + 1}</p>
          <img className={styles.song__thumbnail} src={thumbnail_url} alt='album thumbnail' />
          <div className={styles.song__info}>
            <p className={styles.song__info_title}>{title}</p>
            <p className={styles.song__info_artist}>{artist}</p>
          </div>
        </Link>
      ))}
      <button className={styles.more} onClick={() => setScreenStatus(true)}>
        See more
      </button>
    </div>
  );
};

export default PopularSongs;
