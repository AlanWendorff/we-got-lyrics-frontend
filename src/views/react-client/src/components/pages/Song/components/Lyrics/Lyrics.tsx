import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import styles from './Lyrics.module.scss';

interface ILyricsProps {
  songTitle: string | undefined;
  lyrics: string | undefined;
}

const Lyrics: FC<ILyricsProps> = ({ songTitle, lyrics }) => (
  <div className={styles.container}>
    <p className={styles.song__title}>{lyrics ? `${songTitle} lyrics` : <Skeleton width={100} />}</p>
    <p className={styles.song__lyrics}>{lyrics || <Skeleton height={40} />}</p>
  </div>
);

export default Lyrics;
