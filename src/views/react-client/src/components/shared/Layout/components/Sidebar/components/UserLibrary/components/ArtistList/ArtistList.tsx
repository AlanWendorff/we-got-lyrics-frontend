import { Link, generatePath } from 'react-router-dom';
import { ARTIST } from '@/constants/routes';
import useFavourite from '@/hooks/useFavourite';
import styles from './ArtistList.module.scss';

const ArtistList = () => {
  const { handleGetFavArtists } = useFavourite();
  const ARTISTS = handleGetFavArtists();

  return (
    <>
      {ARTISTS.length !== 0 ? (
        <ul className={styles.container}>
          {ARTISTS.map(({ id, name, thumbnail }) => (
            <li key={id}>
              <Link to={generatePath(ARTIST, { id: `${id}`, name })} className={styles.artist}>
                <img className={styles.artist__thumbnail} src={thumbnail} alt='artist thumbnail' />
                <p className={styles.artist__name}>{name}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.advice}>Here you will see your favourite Artists.</p>
      )}
    </>
  );
};

export default ArtistList;
