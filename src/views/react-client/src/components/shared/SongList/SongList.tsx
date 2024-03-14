import { Link, generatePath } from 'react-router-dom';
import { SONG } from '@/constants/routes';
import styles from './SongList.module.scss';
import useFavouriteStore from '@/store/useFavourite.store';

const SongList = () => {
  const { songs } = useFavouriteStore((state) => state);

  return (
    <>
      {songs.length === 0 ? (
        <p className={styles.advice}>Here you will see your favourite Songs.</p>
      ) : (
        <ul className={styles.container}>
          {songs.map(({ id, name, owner, thumbnail }) => (
            <li key={id}>
              <Link to={generatePath(SONG, { id: String(id), name })} className={styles.song}>
                <img className={styles.song__thumbnail} src={thumbnail} alt='song thumbnail' />
                <p className={styles.song__name}>{name}</p>
                <p className={styles.song__owner}>{owner}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default SongList;
