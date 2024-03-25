import IPalletteColorsDTO from '../../../configuration/dto/PalletteColors.dto';

type TArtistInfoModel = {
  artist: TArtistModel;
};

type TArtistModel = {
  alternate_names: string[] | null;
  description: string | null;
  header_image_url: string;
  header_image_colors: IPalletteColorsDTO;
  image_url: string;
  name: string;
};

export default TArtistInfoModel;
