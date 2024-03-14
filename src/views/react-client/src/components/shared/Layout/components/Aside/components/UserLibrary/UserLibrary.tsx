import { useState } from 'react';
import styles from './UserLibrary.module.scss';
import libraryIcon from '@images/shared/library-icon.png';
import ArtistList from '@shared/ArtistList';
import SongList from '@shared/SongList';
import useFavouriteStore from '@/store/useFavourite.store';

const UserLibrary = () => {
  const { hasUserFav } = useFavouriteStore((state) => state);

  const [controlState, setControlState] = useState({
    artists: true,
    songs: false
  });

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <img src={libraryIcon} alt='library icon' />
        Your library
      </h2>

      {hasUserFav ? (
        <>
          <div className={styles.filters}>
            <button
              className={`${styles.filters__control} ${controlState.artists && styles.filters__control_active}`}
              onClick={() => setControlState({ artists: true, songs: false })}
              aria-label='See your favourite artists'
            >
              Artists
            </button>
            <button
              className={`${styles.filters__control} ${controlState.songs && styles.filters__control_active}`}
              onClick={() => setControlState({ artists: false, songs: true })}
              aria-label='See your favourite songs'
            >
              Songs
            </button>
          </div>

          {controlState.artists && <ArtistList />}
          {controlState.songs && <SongList />}
        </>
      ) : (
        <p className={styles.advice}>You can save your favourite Artists and Songs.</p>
      )}
    </div>
  );
};

export default UserLibrary;
