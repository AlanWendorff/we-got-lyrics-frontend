import { ComponentProps, FC } from 'react';
import Item from './components/Item';
import { TArtist, TSong } from '@core/search/domain/models/Search.model';
import styles from './List.module.scss';
import { ARTIST, SONG } from '@/constants/routes';

interface IListProps extends ComponentProps<'ul'> {
  songs: TSong[];
  artists: TArtist[];
}

const List: FC<IListProps> = ({ songs, artists, ...rest }) => (
  <ul className={styles.container} {...rest}>
    <div className={styles.top}>
      <p className={styles.top__title}>SEARCH RESULTS</p>
    </div>

    <section className={styles.section}>
      <p className={styles.section__title}>SONGS</p>

      {songs.map(({ name, artist_name, image_thumbnail, id }) => (
        <Item key={id} className={styles.section__itemSong} _id={id} name={name} artist_name={artist_name} to={SONG}>
          <Item.ThumbnailSong image_thumbnail={image_thumbnail} name={name} />
          <Item.InfoSong name={name} artist_name={artist_name} />
        </Item>
      ))}
    </section>

    <section className={styles.section}>
      <span className={styles.section__title}>ARTISTS</span>

      {artists.map(({ name, image_thumbnail, id }) => (
        <Item key={id} className={styles.section__itemArtist} _id={id} name={name} artist_name={name} to={ARTIST}>
          <Item.ThumbnailArtist image_thumbnail={image_thumbnail} name={name} />
          <p>{name}</p>
        </Item>
      ))}
    </section>
  </ul>
);

export default List;
