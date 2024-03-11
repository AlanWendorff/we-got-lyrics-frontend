import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import IThumbnailProps from '@/interfaces/thumbnail.interface';
import styles from './Thumbnail.module.scss';

const Thumbnail: FC<IThumbnailProps> = ({ image, ...rest }) =>
  image ? (
    <img className={styles.thumbnail} src={image} alt='artist thumbnail' {...rest} />
  ) : (
    <Skeleton className={styles.thumbnail__skeleton} circle />
  );

export default Thumbnail;
