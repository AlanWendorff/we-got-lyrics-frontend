import { ComponentProps, FC, useEffect } from 'react';
import { Link, generatePath } from 'react-router-dom';
import { SONG } from '@/constants/routes';
import useFavourite from '@/hooks/useFavourite';
import AddToFav from '../AddToFav';
import styles from './SongItem.module.scss';

interface ISongItemProps extends ComponentProps<'li'> {
  id: string;
  number: number;
  thumbnail: string;
  title: string;
  artist: string;
  showControls?: boolean;
}

const SongItem: FC<ISongItemProps> = ({ id, number, thumbnail, title, artist, showControls }) => {
  const { isSongStored, handleSongFav, handleIsSongStored } = useFavourite();

  useEffect(() => {
    handleIsSongStored(id);
  }, []);

  return (
    <li className={styles.container}>
      <Link className={styles.body} to={generatePath(SONG, { id, name: title })}>
        <p className={styles.number}>{number}</p>
        <img className={styles.thumbnail} src={thumbnail} alt='song thumbnail' />
        <div className={styles.info}>
          <p className={styles.info__title}>{title}</p>
          <p className={styles.info__name}>{artist}</p>
        </div>
      </Link>

      {showControls && (
        <div className={styles.controlsContainer}>
          <AddToFav
            slim
            favouriteStatus={isSongStored}
            onClick={() => handleSongFav({ id: parseInt(id), name: title, owner: artist, thumbnail })}
          />
        </div>
      )}
    </li>
  );
};

export default SongItem;
