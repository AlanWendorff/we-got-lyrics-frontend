import { Link, generatePath } from 'react-router-dom';
import { SONG } from '@/constants/routes';
import useFavourite from '@/hooks/useFavourite';
import styles from './SongList.module.scss';

const SongList = () => {
  const { handleGetFavSongs } = useFavourite();
  const SONGS = handleGetFavSongs();

  return (
    <>
      {SONGS.length !== 0 ? (
        <ul className={styles.container}>
          {SONGS.map(({ id, name, owner, thumbnail }) => (
            <li key={id}>
              <Link to={generatePath(SONG, { id: `${id}`, name })} className={styles.song}>
                <img className={styles.song__thumbnail} src={thumbnail} alt='song thumbnail' />
                <p className={styles.song__name}>{name}</p>
                <p className={styles.song__owner}>{owner}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.advice}>Here you will see your favourite Songs.</p>
      )}
    </>
  );
};

export default SongList;
