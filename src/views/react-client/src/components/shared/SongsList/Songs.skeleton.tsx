import Skeleton from 'react-loading-skeleton';
import styles from './PopularSongs.module.scss';

const PopularSongsSkeleton = () => (
  <div className={styles.container}>
    <p className={styles.title}>
      <Skeleton width={150} />
    </p>
    {[...Array(5)].map((id) => (
      <div key={id} className={styles.song}>
        <p className={styles.song__number}>
          <Skeleton className={styles.song__thumbnail} height={15} width={15} />
        </p>

        <Skeleton className={styles.song__thumbnail} height={59} width={59} />
        <div className={styles.song__info}>
          <Skeleton height={20} width={150} />
          <Skeleton height={13} width={75} />
        </div>
      </div>
    ))}
  </div>
);

export default PopularSongsSkeleton;
