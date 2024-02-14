import { FC } from 'react';
import styles from './Banner.module.scss';
import IHeaderImageColors from '@core/configuration/http/dto/shared/HeaderImageColors.dto';

interface IBannerProps {
  bannerColors: IHeaderImageColors | undefined;
}

const Banner: FC<IBannerProps> = ({ bannerColors }) => (
  <div className={styles.container}>
    <div className={styles.vibrantLayer} style={{ backgroundColor: bannerColors?.Vibrant }} />
    <div className={styles.darkLayer} />
    <div className={styles.gradient} style={{ backgroundColor: bannerColors?.Vibrant }} />
  </div>
);

export default Banner;
