import { FC } from 'react';
import styles from './Banner.module.scss';
import TPalletteColorsModel from '@/types/models/palletteColors.model';

interface IBannerProps {
  bannerColors: TPalletteColorsModel | undefined;
}

const Banner: FC<IBannerProps> = ({ bannerColors }) => (
  <div className={styles.container}>
    <div className={styles.vibrantLayer} style={{ backgroundColor: bannerColors?.Vibrant }} />
  </div>
);

export default Banner;
