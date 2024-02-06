import { ComponentProps, FC } from 'react';
import { TArtist, TSong } from '@core/search/domain/models/Search.model';
import styles from './List.module.scss';

interface IListProps extends ComponentProps<'ul'> {
  songs: TSong[];
  artists: TArtist[];
}

const List: FC<IListProps> = ({ songs, artists, ...rest }) => (
  <ul className={styles.container} {...rest}>
    <section className={styles.section__songs}>
      {songs.map(({ name, image_thumbnail, api_path }) => (
        <li>
          <img src={image_thumbnail} alt={`${name} thumbnail`} width={80} />
          <span>{name}</span>
        </li>
      ))}
    </section>

    <hr className={styles.divider} />

    <section className={styles.section__artists}>
      {artists.map(({ name, image_thumbnail, api_path }) => (
        <li>
          <img src={image_thumbnail} alt={`${name} thumbnail`} width={80} />
          <span>{name}</span>
        </li>
      ))}
    </section>
  </ul>
);

export default List;
