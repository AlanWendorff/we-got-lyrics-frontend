import Skeleton from 'react-loading-skeleton';
import styles from './AllSongs.module.scss';
import SongItemSkeleton from '@/components/shared/SongItem/SongItem.skeleton';

const AllSongsSkeleton = () => (
  <div className={styles.container}>
    <div className={styles.top}>
      <Skeleton className={styles.thumbnail} />•
      <Skeleton width={150} />
    </div>

    <ul>
      {[...Array(10)].map((_, index) => (
        <SongItemSkeleton key={index} />
      ))}
    </ul>
  </div>
);

export default AllSongsSkeleton;
