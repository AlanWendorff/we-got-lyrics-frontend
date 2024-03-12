import { FC } from 'react';
import styles from './Banner.module.scss';
import IPalletteColorsDTO from '@core/configuration/http/dto/PalletteColors.dto';

interface IBannerProps {
  bannerColors: IPalletteColorsDTO | undefined;
}

const Banner: FC<IBannerProps> = ({ bannerColors }) => (
  <div className={styles.container}>
    <div className={styles.vibrantLayer} style={{ backgroundColor: bannerColors?.Vibrant }} />
    <div className={styles.darkLayer} />
  </div>
);

export default Banner;
