import { FC } from 'react';
import styles from './RecentlyArtists.module.scss';
import ArtistList from './components/ArtistList';

const ARTISTS = [
  {
    id: 334,
    api_path: '/artists/334',
    name: 'Justin Timberlake',
    image_thumbnail: 'https://images.genius.com/4923d2176463289f7c329dc502df746f.1000x333x1.jpg'
  },
  {
    id: 2000746,
    api_path: '/artists/2000746',
    name: 'Ariana Grande & Justin Bieber',
    image_thumbnail: 'https://images.genius.com/154e44ae15503d079dde1bda1587bd6a.480x240x1.jpg'
  },
  {
    id: 1127156,
    api_path: '/artists/1127156',
    name: 'Lil Tecca',
    image_thumbnail: 'https://images.genius.com/7197b5d8ad7feae32550a5915ddf73c7.1000x1000x1.jpg'
  },
  {
    id: 357,
    api_path: '/artists/357',
    name: 'Justin Bieber',
    image_thumbnail: 'https://images.genius.com/be2c60bdfb3ea6844a46cc5873c75b89.1000x563x1.jpg'
  }
];

const RecentlyArtists: FC = () => (
  <div className={styles.container}>
    <p className={styles.title}>YOUR RECENTLY ARTISTS</p>
    <ArtistList artists={ARTISTS} />
  </div>
);

export default RecentlyArtists;
