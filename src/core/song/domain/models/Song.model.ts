import IPalletteColorsDTO from '../../../configuration/dto/PalletteColors.dto';

type TSongData = {
  song: TSong;
};

type TSong = {
  id: number;
  title: string;
  embed_content: string;
  release_date_with_abbreviated_month_for_display: string;
  song_art_image_thumbnail_url: string;
  header_image_colors: IPalletteColorsDTO;
  pageviews: number | null;
  album: TAlbum | null;
  artist: TArtist;
  featured_artists: string[];
  producer: string[];
  url: string;
};

type TAlbum = {
  id: number;
  name: string;
};

type TArtist = {
  id: number;
  name: string;
  image_url: string;
};

export default TSongData;
