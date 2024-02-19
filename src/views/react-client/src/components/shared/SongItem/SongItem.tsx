import { ComponentProps, FC } from 'react';
import { Link, generatePath } from 'react-router-dom';
import { SONG } from '@/constants/routes';
import styles from './SongItem.module.scss';

interface ISongItemProps extends ComponentProps<'li'> {
  id: string;
  number: number;
  thumbail: string;
  title: string;
  artist: string;
}

const SongItem: FC<ISongItemProps> = ({ id, number, thumbail, title, artist }) => (
  <li className={styles.container}>
    <Link className={styles.body} to={generatePath(SONG, { id, name: title })}>
      <p className={styles.number}>{number}</p>
      <img className={styles.thumbnail} src={thumbail} alt='song thumbnail' />
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p className={styles.artist}>{artist}</p>
      </div>
    </Link>
  </li>
);

export default SongItem;
