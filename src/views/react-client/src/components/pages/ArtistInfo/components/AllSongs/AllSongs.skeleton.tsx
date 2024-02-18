import Skeleton from 'react-loading-skeleton';
import styles from './AllSongs.module.scss';

const AllSongsSkeleton = () => (
  <div className={styles.container}>
    <p className={styles.title}>
      <Skeleton width={150} />
    </p>
    {[...Array(5)].map((id) => (
      <div key={id} className={styles.song}>
        <p className={styles.song__number}>
          <Skeleton height={12} width={12} />
        </p>

        <Skeleton className={styles.song__thumbnail} />
        <div className={styles.song__info}>
          <Skeleton height={20} width={150} />
          <Skeleton height={13} width={75} />
        </div>
      </div>
    ))}
  </div>
);

export default AllSongsSkeleton;
