import IMeta from '@/core/configuration/http/dto/shared/Meta.dto';

type TArtistSongs = {
  meta: IMeta;
  songs: TSongs[];
};

export type TSongs = {
  id: number;
  thumbnail_url: string;
  pageviews: number;
  title: string;
  artist: string;
};

export default TArtistSongs;