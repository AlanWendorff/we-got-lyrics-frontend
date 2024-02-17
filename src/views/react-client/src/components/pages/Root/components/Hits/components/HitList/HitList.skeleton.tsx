import { FC } from 'react';
import styles from './HitList.module.scss';
import Skeleton from 'react-loading-skeleton';

const HitListSkeleton: FC = () => (
  <ul className={styles.container}>
    {[...Array(10)].map((index) => (
      <li key={index}>
        <a className={styles.song}>
          <p className={styles.song__number}>
            <Skeleton height={15} width={15} />
          </p>

          <Skeleton width={59} height={59} />

          <div className={styles.song__info}>
            <p className={styles.song__info_title}>
              <Skeleton width={200} height={19} />
            </p>
            <p className={styles.song__info_artist}>
              <Skeleton width={100} height={12} />
            </p>
          </div>
        </a>
      </li>
    ))}
  </ul>
);

export default HitListSkeleton;
