import { FC } from 'react';
import { APP_NAME } from '@/constants/config';
import useThemeColor from '@/hooks/useThemeColor';
import useTabName from '@/hooks/useTabName';
import heartIcon from '@images/shared/heart-icon-ol.png';
import ArtistList from '@shared/ArtistList';
import styles from './StoredArtists.module.scss';

const StoredArtists: FC = () => {
  useTabName({ tabName: APP_NAME });
  useThemeColor({ color: '#000000' });

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <img src={heartIcon} alt='heart icon' />
        Your Favourite Artists
      </h2>

      <ArtistList />
    </div>
  );
};

export default StoredArtists;
