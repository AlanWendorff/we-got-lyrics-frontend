import { FC } from 'react';
import heartIcon from '@images/shared/heart-icon-ol.png';
import SongList from '@shared/SongList';
import styles from './StoredSongs.module.scss';

const StoredSongs: FC = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>
      <img src={heartIcon} alt='heart icon' />
      Your Favourite Songs
    </h2>

    <SongList />
  </div>
);

export default StoredSongs;
