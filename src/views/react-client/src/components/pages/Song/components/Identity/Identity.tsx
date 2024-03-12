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
  date: string | undefined;
  views: number | null | undefined;
}

const Identity: FC<IIdentityProps> = ({ artistId, title, artistName, albumName, date, views }) => (
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

    <div className={styles.extra}>
      {date !== null && <p>{date || <Skeleton width={100} height={19} />}</p>}
      {'|'}
      {views !== null && <p>{views ? `${(views! / 1000).toFixed(1)}K Views` : <Skeleton width={100} height={19} />}</p>}
    </div>
  </div>
);

export default Identity;
