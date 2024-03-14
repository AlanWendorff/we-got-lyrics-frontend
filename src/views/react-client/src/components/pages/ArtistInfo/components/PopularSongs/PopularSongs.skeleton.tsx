import Skeleton from 'react-loading-skeleton';
import styles from './PopularSongs.module.scss';
import SongItemSkeleton from '@/components/shared/SongItem/SongItem.skeleton';

const PopularSongsSkeleton = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>
      <Skeleton width={150} />
    </h2>

    <ul>
      {[...Array(5)].map((_, index) => (
        <SongItemSkeleton key={index} />
      ))}
    </ul>
  </div>
);

export default PopularSongsSkeleton;
