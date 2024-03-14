import { FC } from 'react';
import { TSongs } from '@core/artistInfo/domain/models/ArtistSongs.model';
import SongItem from '@/components/shared/SongItem/SongItem';
import PopularSongsSkeleton from './PopularSongs.skeleton';
import chartIcon from '@images/shared/chart-icon.png';
import styles from './PopularSongs.module.scss';

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
      <h2 className={styles.title}>
        <img src={chartIcon} alt='chart icon' />
        POPULAR {artistName} SONGS
      </h2>

      <ul>
        {songs.map(({ id, thumbnail_url, title, artist }, key) => (
          <SongItem key={key} id={String(id)} number={key + 1} title={title} thumbnail={thumbnail_url} artist={artist} showControls />
        ))}
      </ul>

      <button className={styles.more} onClick={handleSetIsAllSongs} aria-label='See more songs'>
        See more
      </button>
    </div>
  );
};

export default PopularSongs;
