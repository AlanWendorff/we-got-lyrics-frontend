import { FC } from 'react';
import styles from './SongItem.module.scss';
import Skeleton from 'react-loading-skeleton';

const SongItemSkeleton: FC = () => (
  <li className={styles.container}>
    <a className={styles.body}>
      <p className={styles.number}>
        <Skeleton height={15} width={15} />
      </p>

      <Skeleton className={styles.thumbnail} width={59} height={59} />

      <div className={styles.info}>
        <Skeleton width={200} height={19} />
        <Skeleton width={100} height={12} />
      </div>
    </a>
  </li>
);

export default SongItemSkeleton;
