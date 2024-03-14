import { FC } from 'react';
import { Link, generatePath } from 'react-router-dom';
import { ARTIST } from '@/constants/routes';
import Skeleton from 'react-loading-skeleton';
import shortenNumber from '@/utils/shortenNumber';
import calendarIcon from '@images/shared/calendar-icon.png';
import eyeIcon from '@images/shared/eye-icon.png';
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
    <h1 className={styles.title}>{title || <Skeleton />}</h1>

    {artistName ? (
      <div className={styles.subtitle}>
        <Link to={generatePath(ARTIST, { id: String(artistId), name: artistName })}>{artistName}</Link>&nbsp;
        <span>{albumName && `•  ${albumName}`}</span>
      </div>
    ) : (
      <div className={styles.subtitle}>
        <Skeleton />
      </div>
    )}

    <div className={styles.extra}>
      {date !== null && (
        <p>
          {date && <img src={calendarIcon} alt='calendar icon' height={19} />}
          {date || <Skeleton width={100} />}
        </p>
      )}
      {views && <div className={styles.separator}>|</div>}
      {views !== null && (
        <p>
          {views && <img src={eyeIcon} alt='eye icon' height={19} />}
          {views ? `${shortenNumber(views)} Views` : <Skeleton width={100} />}
        </p>
      )}
    </div>
  </div>
);

export default Identity;
