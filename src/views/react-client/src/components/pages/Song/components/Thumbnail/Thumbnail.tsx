import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import IThumbnail from '@/interfaces/thumbnail.interface';
import styles from './Thumbnail.module.scss';

const Thumbnail: FC<IThumbnail> = ({ image, title }) =>
  image ? <img className={styles.thumbnail} src={image} alt={`${title} thumbnail`} /> : <Skeleton width={211} height={211} />;

export default Thumbnail;
