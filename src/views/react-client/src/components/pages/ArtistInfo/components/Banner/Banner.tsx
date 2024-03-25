import { ComponentProps, FC } from 'react';
import TPalletteColorsModel from '@/types/models/palletteColors.model';
import styles from './Banner.module.scss';

interface IBannerProps extends ComponentProps<'div'> {
  banner: string | undefined;
  bannerColors: TPalletteColorsModel | undefined;
}

const Banner: FC<IBannerProps> = ({ banner, bannerColors, ...rest }) => (
  <div className={`${styles.container} ${rest.className}`} {...rest}>
    {banner ? <img className={styles.banner} src={banner} alt='artist banner' /> : <div className={styles.banner} />}
    <div className={styles.darkLayer} />
  </div>
);

export default Banner;
