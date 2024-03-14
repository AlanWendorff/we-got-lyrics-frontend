import { FC } from 'react';
import heartIcon from '@images/shared/heart-icon-ol.png';
import ArtistList from '@shared/ArtistList';
import styles from './StoredArtists.module.scss';

const StoredArtists: FC = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>
      <img src={heartIcon} alt='heart icon' />
      Your Favourite Artists
    </h2>

    <ArtistList />
  </div>
);

export default StoredArtists;
