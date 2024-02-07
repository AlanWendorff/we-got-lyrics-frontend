import { IMeta } from '@/core/configuration/http/dto/ArtistInfo.dto';

type TArtistInfo = {
  meta: IMeta;
  artist: TArtist;
};

type TArtist = {
  alternate_names: string[];
  description: string;
  header_image_url: string;
  image_url: string;
  name: string;
};

export default TArtistInfo;
