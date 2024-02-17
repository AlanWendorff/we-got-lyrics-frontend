import IHeaderImageColors from '../../../configuration/http/dto/shared/HeaderImageColors.dto';
import IMeta from '../../../../core/configuration/http/dto/shared/Meta.dto';

type TArtistInfo = {
  meta: IMeta;
  artist: TArtist;
};

type TArtist = {
  alternate_names: string[] | undefined;
  description: string;
  header_image_url: string;
  header_image_colors: IHeaderImageColors;
  image_url: string;
  name: string;
};

export default TArtistInfo;
