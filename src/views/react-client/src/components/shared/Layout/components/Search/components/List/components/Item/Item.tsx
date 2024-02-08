import { ComponentProps, FC } from 'react';
import { Link, generatePath } from 'react-router-dom';
import styles from './Item.module.scss';

interface IItemProps extends ComponentProps<'li'> {
  _id: number;
  name: string;
  artist_name: string;
  to: string;
}

interface IThumbnailProps extends ComponentProps<'img'> {
  name: string;
  image_thumbnail: string;
}

interface IInfoSongProps {
  name: string;
  artist_name: string;
}

const Item = ({ _id, name, to, children, ...rest }: IItemProps) => (
  <li {...rest}>
    <Link to={generatePath(to, { id: `${_id}`, name })} className={styles.link}>
      {children}
    </Link>
  </li>
);

const ThumbnailSong: FC<IThumbnailProps> = ({ name, image_thumbnail, ...rest }) => (
  <img className={styles.thumbnail_song} src={image_thumbnail} alt={`${name} thumbnail`} {...rest} />
);

const ThumbnailArtist: FC<IThumbnailProps> = ({ name, image_thumbnail, ...rest }) => (
  <img className={styles.thumbnail_artist} src={image_thumbnail} alt={`${name} thumbnail`} {...rest} />
);

const InfoSong: FC<IInfoSongProps> = ({ name, artist_name }) => (
  <div className={styles.info_song}>
    <p className={styles.info_songName}>{name}</p>
    <p className={styles.info_songOwner}>{artist_name}</p>
  </div>
);

Item.ThumbnailSong = ThumbnailSong;
Item.ThumbnailArtist = ThumbnailArtist;
Item.InfoSong = InfoSong;

export default Item;