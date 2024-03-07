import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import { ARTIST } from '@/constants/routes';
import { Link, generatePath } from 'react-router-dom';
import styles from './Identity.module.scss';

interface IIdentityProps {
  artistId: number | undefined;
  artistName: string | undefined;
  albumName: string | undefined;
  title: string | undefined;
}

const Identity: FC<IIdentityProps> = ({ artistId, title, artistName, albumName }) => (
  <div className={styles.container}>
    <p className={styles.title}>{title || <Skeleton />}</p>

    {artistName ? (
      <div className={styles.subtitle}>
        <Link to={generatePath(ARTIST, { id: `${artistId}`, name: artistName })}>{artistName}</Link>&nbsp;
        <p>{albumName && `•  ${albumName}`}</p>
      </div>
    ) : (
      <Skeleton width={200} />
    )}
  </div>
);

export default Identity;
