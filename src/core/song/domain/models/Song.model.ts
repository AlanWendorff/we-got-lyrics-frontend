import IPalletteColorsDTO from '../../../configuration/dto/PalletteColors.dto';

type TSongDetailModel = {
  song: TDetailModel;
};

type TDetailModel = {
  id: number;
  title: string;
  embed_content: string;
  release_date_with_abbreviated_month_for_display: string;
  song_art_image_thumbnail_url: string;
  header_image_colors: IPalletteColorsDTO;
  pageviews: number | null;
  album: TAlbumModel | null;
  artist: TArtistModel;
  featured_artists: string[];
  producer: string[];
  url: string;
};

type TAlbumModel = {
  id: number;
  name: string;
};

type TArtistModel = {
  id: number;
  name: string;
  image_url: string;
};

export default TSongDetailModel;
