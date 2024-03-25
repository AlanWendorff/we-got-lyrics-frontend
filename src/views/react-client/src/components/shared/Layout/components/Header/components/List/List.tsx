import { ComponentProps, FC } from 'react';
import { ARTIST, SONG } from '@/constants/routes';
import { TArtistModel, TSongModel } from '@core/search/domain/models/Search.model';
import Item from './components/Item';
import chevronUpIcon from '@images/shared/chevron-up.png';
import styles from './List.module.scss';

interface IListProps extends ComponentProps<'ul'> {
  songs: TSongModel[];
  artists: TArtistModel[];
  handleIsListShown: () => void;
}

const List: FC<IListProps> = ({ songs, artists, handleIsListShown, ...rest }) => (
  <ul className={`${styles.container} ${rest.className}`}>
    <div className={styles.top}>
      <p className={styles.top__title}>SEARCH RESULTS</p>
      <button className={styles.close} onClick={handleIsListShown} aria-label='Close search results'>
        <img src={chevronUpIcon} alt='chevron up' />
      </button>
    </div>

    <section className={styles.section}>
      <p className={styles.section__title}>SONGS</p>

      {songs.map(({ name, artist_name, image_thumbnail, id }) => (
        <Item key={id} className={styles.section__itemSong} _id={id} name={name} artist_name={artist_name} to={SONG}>
          <Item.ThumbnailSong image={image_thumbnail} name={name} />
          <Item.InfoSong name={name} artist_name={artist_name} />
        </Item>
      ))}
    </section>

    <section className={styles.section}>
      <span className={styles.section__title}>ARTISTS</span>

      {artists.map(({ name, image_thumbnail, id }) => (
        <Item key={id} className={styles.section__itemArtist} _id={id} name={name} artist_name={name} to={ARTIST}>
          <Item.ThumbnailArtist image={image_thumbnail} name={name} />
          <p>{name}</p>
        </Item>
      ))}
    </section>
  </ul>
);

export default List;
