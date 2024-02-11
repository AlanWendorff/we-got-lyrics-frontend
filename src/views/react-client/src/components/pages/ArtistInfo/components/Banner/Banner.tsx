import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import styles from './Banner.module.scss';

interface IBannerProps {
  banner: string | undefined;
}

const Banner: FC<IBannerProps> = ({ banner }) => (
  <div className={styles.container}>
    {banner ? <img className={styles.banner} src={banner} alt='artist banner' /> : <Skeleton className={styles.banner} />}
    <div className={styles.blur} />
  </div>
);

export default Banner;
