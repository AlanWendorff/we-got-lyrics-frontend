import heartIcon from '@images/shared/heart-icon-ol.png';
import styles from './StoredSongs.module.scss';
import SongList from '@shared/SongList';

const StoredSongs = () => (
  <div className={styles.container}>
    <p className={styles.title}>
      <img src={heartIcon} alt='heart icon' />
      Your Favourite Songs
    </p>

    <SongList />
  </div>
);

export default StoredSongs;
