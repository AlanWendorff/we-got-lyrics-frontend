import { ComponentProps, FC, useState } from 'react';
import { TArtist, TSong } from '@core/search/domain/models/Search.model';
import { ARTIST, SONG } from '@/constants/routes';
import Item from '../List/components/Item';
import chevronUpIcon from '@images/shared/chevron-up.png';
import styles from './ListMobile.module.scss';

interface IListMobileProps extends ComponentProps<'ul'> {
  songs: TSong[];
  artists: TArtist[];
  handleIsListShown: () => void;
}

const ListMobile: FC<IListMobileProps> = ({ songs, artists, handleIsListShown, ...rest }) => {
  const [controlState, setControlState] = useState({
    artists: false,
    songs: true
  });

  return (
    <ul className={`${styles.container} ${rest.className}`}>
      <div className={styles.top}>
        <div className={styles.top__controls}>
          <button
            className={`${styles.control} ${controlState.songs && styles.active}`}
            onClick={() => setControlState({ artists: false, songs: true })}
            aria-label='See songs'
          >
            Songs
          </button>
          <button
            className={`${styles.control} ${controlState.artists && styles.active}`}
            onClick={() => setControlState({ artists: true, songs: false })}
            aria-label='See artists'
          >
            Artists
          </button>
        </div>
        <button className={styles.close} onClick={handleIsListShown} aria-label='close search results'>
          <img src={chevronUpIcon} alt='chevron up' />
        </button>
      </div>

      {controlState.songs && (
        <section className={styles.section}>
          {songs.map(({ name, artist_name, image_thumbnail, id }) => (
            <Item key={id} className={styles.section__itemSong} _id={id} name={name} artist_name={artist_name} to={SONG}>
              <Item.ThumbnailSong image={image_thumbnail} name={name} />
              <Item.InfoSong name={name} artist_name={artist_name} />
            </Item>
          ))}
        </section>
      )}

      {controlState.artists && (
        <section className={styles.section}>
          {artists.map(({ name, image_thumbnail, id }) => (
            <Item key={id} className={styles.section__itemArtist} _id={id} name={name} artist_name={name} to={ARTIST}>
              <Item.ThumbnailArtist image={image_thumbnail} name={name} />
              <p>{name}</p>
            </Item>
          ))}
        </section>
      )}
    </ul>
  );
};
export default ListMobile;
