import { FC } from 'react';
import styles from './Top.module.scss';
import IChildren from '@/interfaces/children.interface';

interface ISongThumbnailProps {
  img: string;
  title: string;
}

interface ISongMainInfoProps {
  artistName: string;
  albumName: string | undefined;
  title: string;
}

interface ISongContributorProps {
  contributors: string[] | undefined;
  contributorType: string;
}

const Top = ({ children }: IChildren) => <div className={styles.top}>{children}</div>;

const SongThumbnail: FC<ISongThumbnailProps> = ({ img, title }) => (
  <img className={styles.thumbnail} src={img} alt={`${title} thumbnail`} />
);

const InfoContainer: FC<IChildren> = ({ children }) => <div className={styles.info__container}>{children}</div>;

const SongMainInfo: FC<ISongMainInfoProps> = ({ title, artistName, albumName }) => (
  <>
    <p className={styles.title}>{title}</p>
    <p className={styles.subtitle}>
      <span>{artistName}</span> • Track on <span>{albumName}</span>
    </p>
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
