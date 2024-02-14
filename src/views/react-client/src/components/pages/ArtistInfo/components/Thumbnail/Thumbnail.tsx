import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import IThumbnail from '@/interfaces/thumbnail.interface';
import styles from './Thumbnail.module.scss';

const Thumbnail: FC<IThumbnail> = ({ image, ...rest }) =>
  image ? <img className={styles.thumbnail} src={image} alt='artist thumbnail' {...rest} /> : <Skeleton width={155} height={155} circle />;

export default Thumbnail;
