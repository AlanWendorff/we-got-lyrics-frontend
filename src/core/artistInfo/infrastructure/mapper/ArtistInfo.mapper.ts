import IArtistInfoDTO from '@/core/configuration/http/dto/ArtistInfo.dto';
import TArtistInfo from '../../domain/models/ArtistInfo.model';

const artistInfoMapper = (DTO: IArtistInfoDTO): TArtistInfo => ({
  meta: DTO.meta,
  artist: {
    alternate_names: DTO.response.artist.alternate_names,
    description: DTO.response.artist.formatted_description,
    header_image_url: DTO.response.artist.header_image_url,
    image_url: DTO.response.artist.image_url,
    name: DTO.response.artist.name
  }
});

export default artistInfoMapper;
