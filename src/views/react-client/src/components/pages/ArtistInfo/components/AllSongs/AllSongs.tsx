import { Dispatch, FC, SetStateAction } from 'react';
import { Link, generatePath } from 'react-router-dom';
import { SONG } from '@/constants/routes';
import { TSongs } from '@core/artistInfo/domain/models/ArtistSongs.model';
import styles from './AllSongs.module.scss';
import AllSongsSkeleton from './AllSongs.skeleton';

interface IAllSongsProps {
  songs: TSongs[] | undefined;
  artistName: string | undefined;
  artistId: string | undefined;
  setScreenStatus: Dispatch<SetStateAction<boolean>>;
}

const AllSongs: FC<IAllSongsProps> = ({ songs, artistName, setScreenStatus }) => {
  if (!songs) {
    return <AllSongsSkeleton />;
  }

  return (
    <div className={styles.container}>
      <button className={styles.more} onClick={() => setScreenStatus(false)}>
        Back
      </button>

      <p className={styles.title}>ALL SONGS BY {artistName}</p>

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
    </div>
  );
};

export default AllSongs;
