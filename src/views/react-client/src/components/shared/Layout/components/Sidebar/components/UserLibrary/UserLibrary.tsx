import { useState } from 'react';
import styles from './UserLibrary.module.scss';
import libraryIcon from '@images/shared/library-icon.png';
import useFavourite from '@/hooks/useFavourite';
import ArtistList from './components/ArtistList';
import SongList from './components/SongList';

const UserLibrary = () => {
  const { hasUserFav } = useFavourite();

  const [controlState, setControlState] = useState({
    artists: true,
    songs: false
  });

  return (
    <div className={styles.container}>
      <p className={styles.title}>
        <img src={libraryIcon} alt='library icon' />
        Your Saves
      </p>

      {hasUserFav ? (
        <>
          <div className={styles.filters}>
            <button
              className={`${styles.control} ${controlState.artists && styles.active}`}
              onClick={() => setControlState({ artists: true, songs: false })}
            >
              Artists
            </button>
            <button
              className={`${styles.control} ${controlState.songs && styles.active}`}
              onClick={() => setControlState({ artists: false, songs: true })}
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
