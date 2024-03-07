import { ComponentProps, FC } from 'react';
import { Link, generatePath } from 'react-router-dom';
import { SONG } from '@/constants/routes';
import styles from './SongItem.module.scss';
import AddToFav from '../AddToFav';
import useFavourite from '@/hooks/useFavourite';
import useFavouriteStore from '@/store/useFavourite.store';

interface ISongItemProps extends ComponentProps<'li'> {
  id: string;
  number: number;
  thumbnail: string;
  title: string;
  artist: string;
  showControls?: boolean;
}

const SongItem: FC<ISongItemProps> = ({ id, number, thumbnail, title, artist, showControls }) => {
  const { isSongStored, handleSongFav } = useFavourite();
  const { songs } = useFavouriteStore((state) => state);

  const FINDED = songs.find((item) => `${item.id}` === id);

  return (
    <li className={styles.container}>
      <Link className={styles.body} to={generatePath(SONG, { id, name: title })}>
        <p className={styles.number}>{number}</p>
        <img className={styles.thumbnail} src={thumbnail} alt='song thumbnail' />
        <div className={styles.info}>
          <p className={styles.title}>{title}</p>
          <p className={styles.artist}>{artist}</p>
        </div>
      </Link>
      {showControls && (
        <div className={styles.controls}>
          <AddToFav
            slim
            favouriteStatus={FINDED ? true : false}
            onClick={() => handleSongFav({ id: parseInt(id), name: title, owner: artist, thumbnail })}
          />
        </div>
      )}
    </li>
  );
};

export default SongItem;
