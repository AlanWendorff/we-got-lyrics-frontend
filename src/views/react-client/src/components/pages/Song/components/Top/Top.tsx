import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import styles from './Top.module.scss';
import IChildren from '@/interfaces/children.interface';
import { ARTIST } from '@/constants/routes';
import { Link, generatePath } from 'react-router-dom';

interface ISongThumbnailProps {
  img: string | undefined;
  title: string | undefined;
}

interface ISongMainInfoProps {
  artistId: number | undefined;
  artistName: string | undefined;
  albumName: string | undefined;
  title: string | undefined;
}

interface ISongContributorProps {
  contributors: string[] | undefined;
  contributorType: string;
}

const Top = ({ children }: IChildren) => <div className={styles.top}>{children}</div>;

const SongThumbnail: FC<ISongThumbnailProps> = ({ img, title }) =>
  img ? <img className={styles.thumbnail} src={img} alt={`${title} thumbnail`} /> : <Skeleton width={260} height={260} />;

const InfoContainer: FC<IChildren> = ({ children }) => <div className={styles.info__container}>{children}</div>;

const SongMainInfo: FC<ISongMainInfoProps> = ({ artistId, title, artistName, albumName }) => (
  <>
    <p className={styles.title}>{title || <Skeleton />}</p>

    {artistName ? (
      <p className={styles.subtitle}>
        <Link to={generatePath(ARTIST, { id: `${artistId}`, name: artistName })}>{artistName}</Link>&nbsp;{albumName && `•  ${albumName}`}
      </p>
    ) : (
      <Skeleton width={100} />
    )}
  </>
);

const SongContributor: FC<ISongContributorProps> = ({ contributors, contributorType }) =>
  contributors && (
    <div className={styles.contributors}>
      <p>{contributorType}</p>
      {contributors.map((contributor) => (
        <span>{contributor}</span>
      ))}
    </div>
  );

Top.SongThumbnail = SongThumbnail;
Top.InfoContainer = InfoContainer;
Top.SongMainInfo = SongMainInfo;
Top.SongContributor = SongContributor;

export default Top;
