import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import styles from './Banner.module.scss';
import IHeaderImageColors from '@core/configuration/http/dto/shared/HeaderImageColors.dto';

interface IBannerProps {
  banner: string | undefined;
  bannerColors: IHeaderImageColors | undefined;
}

const Banner: FC<IBannerProps> = ({ banner, bannerColors }) => (
  <div className={styles.container}>
    {banner ? <img className={styles.banner} src={banner} alt='artist banner' /> : <Skeleton className={styles.banner} />}
    <div className={styles.darkLayer} />
    <div className={styles.gradient} style={{ backgroundColor: bannerColors?.Vibrant }} />
  </div>
);

export default Banner;
