import { Link, generatePath } from 'react-router-dom';
import { ARTIST } from '@/constants/routes';
import styles from './ArtistList.module.scss';
import useFavouriteStore from '@/store/useFavourite.store';

const ArtistList = () => {
  const { artists } = useFavouriteStore((state) => state);

  return (
    <>
      {artists.length === 0 ? (
        <p className={styles.advice}>Here you will see your favourite Artists.</p>
      ) : (
        <ul className={styles.container}>
          {artists.map(({ id, name, thumbnail }) => (
            <li key={id}>
              <Link to={generatePath(ARTIST, { id: `${id}`, name })} className={styles.artist}>
                <img className={styles.artist__thumbnail} src={thumbnail} alt='artist thumbnail' />
                <p className={styles.artist__name}>{name}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ArtistList;
