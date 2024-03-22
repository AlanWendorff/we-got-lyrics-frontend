import { ComponentProps, FC } from 'react';
import TPalletteColors from '@/types/models/palletteColors.model';
import styles from './Banner.module.scss';

interface IBannerProps extends ComponentProps<'div'> {
  banner: string | undefined;
  bannerColors: TPalletteColors | undefined;
}

const Banner: FC<IBannerProps> = ({ banner, bannerColors, ...rest }) => (
  <div className={`${styles.container} ${rest.className}`}>
    <img className={styles.banner} src={banner} alt='artist banner' />
    <div className={styles.darkLayer} />
  </div>
);

export default Banner;
