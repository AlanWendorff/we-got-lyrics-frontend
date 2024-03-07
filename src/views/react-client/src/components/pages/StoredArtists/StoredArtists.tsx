import heartIcon from '@images/shared/heart-icon-ol.png';
import styles from './StoredArtists.module.scss';
import ArtistList from '@shared/ArtistList';

const StoredArtists = () => (
  <div className={styles.container}>
    <p className={styles.title}>
      <img src={heartIcon} alt='heart icon' />
      Your Favourite Artists
    </p>

    <ArtistList />
  </div>
);

export default StoredArtists;
