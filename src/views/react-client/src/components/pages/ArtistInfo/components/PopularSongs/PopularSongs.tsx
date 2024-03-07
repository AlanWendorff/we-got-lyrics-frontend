import { FC } from 'react';
import SongItem from '@/components/shared/SongItem/SongItem';
import { TSongs } from '@core/artistInfo/domain/models/ArtistSongs.model';
import styles from './PopularSongs.module.scss';
import PopularSongsSkeleton from './PopularSongs.skeleton';
import chartIcon from '@images/shared/chart-icon.png';

interface IPopularSongs {
  songs: TSongs[] | undefined;
  artistName: string | undefined;
  handleSetIsAllSongs: () => void;
}

const PopularSongs: FC<IPopularSongs> = ({ songs, artistName, handleSetIsAllSongs }) => {
  if (!songs) {
    return <PopularSongsSkeleton />;
  }

  return (
    <div className={styles.container}>
      <p className={styles.title}>
        <img src={chartIcon} alt='chart icon' />
        POPULAR {artistName} CHARTS
      </p>

      <ul>
        {songs.map(({ id, thumbnail_url, title, artist }, key) => (
          <SongItem key={key} id={`${id}`} number={key + 1} title={title} thumbnail={thumbnail_url} artist={artist} />
        ))}
      </ul>

      <button className={styles.more} onClick={handleSetIsAllSongs}>
        See more
      </button>
    </div>
  );
};

export default PopularSongs;
