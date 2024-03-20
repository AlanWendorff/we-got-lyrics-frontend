import IPalletteColorsDTO from '../../../configuration/http/dto/PalletteColors.dto';

type TArtistInfo = {
  artist: TArtist;
};

type TArtist = {
  alternate_names: string[] | null;
  description: string | null;
  header_image_url: string;
  header_image_colors: IPalletteColorsDTO;
  image_url: string;
  name: string;
};

export default TArtistInfo;
