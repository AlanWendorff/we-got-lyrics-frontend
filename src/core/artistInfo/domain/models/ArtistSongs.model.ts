type TArtistSongs = {
  songs: TSongs[];
  next_page: number | null;
};

export type TSongs = {
  id: number;
  thumbnail_url: string;
  pageviews: number;
  title: string;
  artist: string;
};

export default TArtistSongs;
