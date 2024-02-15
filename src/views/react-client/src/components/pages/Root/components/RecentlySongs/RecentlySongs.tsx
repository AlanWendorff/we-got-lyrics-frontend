import { FC } from 'react';
import styles from './RecentlySongs.module.scss';
import SongsList from '@/components/shared/SongsList';

const SONGS = [
  {
    id: 3057010,
    thumbnail_url: 'https://images.genius.com/4164dff756ddd455675789bd67fe5f1a.300x300x1.png',
    title: 'Despacito (Remix)',
    pageviews: 23558678,
    artist: 'Luis Fonsi & Daddy Yankee (Ft. Justin Bieber)'
  },
  {
    id: 3004837,
    thumbnail_url: 'https://images.genius.com/6127733e5dbc43f75fcbf1b92e48a068.300x300x1.png',
    title: 'I’m the One',
    pageviews: 5503956,
    artist: 'DJ Khaled (Ft. Chance the Rapper, Justin Bieber, Lil Wayne & Quavo)'
  },
  {
    id: 2342329,
    thumbnail_url: 'https://images.genius.com/c48eb30caab693c9a80f49610e2ddb24.300x300x1.png',
    title: 'Love Yourself',
    pageviews: 4475638,
    artist: 'Justin Bieber'
  },
  {
    id: 2819412,
    thumbnail_url: 'https://images.genius.com/1b62379797987f85048fa9cc9cf37a9e.300x300x1.jpg',
    title: 'Let Me Love You',
    pageviews: 3421572,
    artist: 'DJ Snake (Ft. Justin Bieber)'
  },
  {
    id: 566,
    thumbnail_url: 'https://images.genius.com/08d71b1c1d0ecb9c572f210a1054a091.300x300x1.png',
    title: 'Baby',
    pageviews: 3018650,
    artist: 'Justin Bieber (Ft. Ludacris)'
  }
];

const RecentlySongs: FC = () => (
  <div className={styles.container}>
    <p className={styles.title}>YOUR RECENTLY SONGS</p>
    <SongsList songs={SONGS} />
  </div>
);

export default RecentlySongs;
