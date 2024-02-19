import Skeleton from 'react-loading-skeleton';
import styles from './PopularSongs.module.scss';
import SongItemSkeleton from '@/components/shared/SongItem/SongItem.skeleton';

const PopularSongsSkeleton = () => (
  <div className={styles.container}>
    <p className={styles.title}>
      <Skeleton width={150} />
    </p>

    <ul>
      {[...Array(5)].map((index) => (
        <SongItemSkeleton key={index} />
      ))}
    </ul>
  </div>
);

export default PopularSongsSkeleton;
