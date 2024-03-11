import { ComponentProps, FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import IPalletteColorsDTO from '@core/configuration/http/dto/PalletteColors.dto';
import styles from './Banner.module.scss';

interface IBannerProps extends ComponentProps<'div'> {
  banner: string | undefined;
  bannerColors: IPalletteColorsDTO | undefined;
}

const Banner: FC<IBannerProps> = ({ banner, bannerColors, ...rest }) => (
  <div className={`${styles.container} ${rest.className}`}>
    {banner ? <img className={styles.banner} src={banner} alt='artist banner' /> : <Skeleton className={styles.banner} />}
    <div className={styles.darkLayer} />
    <div className={styles.gradient} style={{ backgroundColor: bannerColors?.Vibrant }} />
  </div>
);

export default Banner;
