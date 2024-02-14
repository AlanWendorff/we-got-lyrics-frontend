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
  <div>
    <p className={styles.title}>{title || <Skeleton width={300} />}</p>

    {artistName ? (
      <p className={styles.subtitle}>
        <Link to={generatePath(ARTIST, { id: `${artistId}`, name: artistName })}>{artistName}</Link>&nbsp;{albumName && `•  ${albumName}`}
      </p>
    ) : (
      <Skeleton width={200} />
    )}
  </div>
);

export default Identity;
