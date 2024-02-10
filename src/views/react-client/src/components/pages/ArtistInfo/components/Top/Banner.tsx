import { FC } from 'react';
import styles from './Banner.module.scss';

interface IBannerProps {
  banner: string | undefined;
}

const Banner: FC<IBannerProps> = ({ banner }) => (
  <div className={styles.container}>
    <img className={styles.banner} src={banner} alt='artist banner' />
    <div className={styles.blur} />
  </div>
);

export default Banner;
