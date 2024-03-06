import { useState } from 'react';
import styles from './UserLibrary.module.scss';
import libraryIcon from '@images/shared/library-icon.png';
import { Link, generatePath } from 'react-router-dom';
import { ARTIST, SONG } from '@/constants/routes';

const SAVED_ARTISTS = [
  {
    thumbnail: 'https://images.genius.com/98f8d524cf242df5e58849bc0a75c6f0.960x960x1.jpg',
    name: 'DVSR',
    id: 620705
  },
  {
    thumbnail: 'https://images.genius.com/aa8b9dce2492fe413c23f77b643788fd.914x914x1.jpg',
    name: 'Lil Wayne',
    id: 4
  },
  {
    thumbnail: 'https://images.genius.com/9f1da9163a93b228a90f5e10ce9f6efe.743x743x1.jpg',
    name: 'Michael Jackson',
    id: 835
  },
  {
    thumbnail: 'https://images.genius.com/e61adb6350f274fda9c4b1fa73939e95.1000x1000x1.jpg',
    name: 'Ed Sheeran',
    id: 12418
  }
];

const SAVED_SONGS = [
  {
    thumbnail: 'https://images.genius.com/86dcab92e27599f8556b5b8f21932449.300x300x1.png',
    name: 'Shape of You',
    owner: 'Ed Sheeran',
    id: 2949128
  },
  {
    thumbnail: 'https://images.genius.com/8463e8a9dfe786771c33ce305a1c29ed.300x300x1.jpg',
    name: 'What’s the Proof?',
    owner: 'DVSR',
    id: 5_792_042
  },
  {
    thumbnail: 'https://images.genius.com/fddd1216adb88c56811336c3de7e9f47.300x300x1.jpg',
    name: 'Gold Cobra',
    owner: 'Limp Bizkit',
    id: 395884
  },
  {
    thumbnail: 'https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2F5f674ff6526d1f0de088709eb032c8b4.200x200x1.webp',
    name: 'Acid Green',
    owner: 'Daybreak (band)',
    id: 4413248
  }
];

const UserLibrary = () => {
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

      <p className={styles.advice}>You can save your favourite Artists and Songs.</p>

      {controlState.artists && (
        <ul className={styles.list}>
          {SAVED_ARTISTS.map(({ id, name, thumbnail }) => (
            <li key={id}>
              <Link to={generatePath(ARTIST, { id: `${id}`, name })} className={styles.item}>
                <img src={thumbnail} alt='artist thumbnail' />
                <p>{name}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {controlState.songs && (
        <ul className={styles.list__song}>
          {SAVED_SONGS.map(({ id, name, owner, thumbnail }) => (
            <li key={id}>
              <Link to={generatePath(SONG, { id: `${id}`, name })} className={styles.item__song}>
                <img src={thumbnail} alt='artist thumbnail' />
                <p className={styles.name}>{name}</p>
                <p className={styles.owner}>{owner}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserLibrary;
