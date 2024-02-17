import IArtistInfoDTO from '../../../../core/configuration/http/dto/ArtistInfo.dto';
import TArtistInfo from '../../domain/models/ArtistInfo.model';

const artistInfoMapper = (DTO: IArtistInfoDTO): TArtistInfo => ({
  meta: DTO.meta,
  artist: {
    alternate_names: DTO.response.artist.alternate_names.length === 0 ? undefined : DTO.response.artist.alternate_names,
    description: DTO.response.artist.formatted_description,
    header_image_url: DTO.response.artist.header_image_url,
    header_image_colors: DTO.response.artist.header_image_colors,
    image_url: DTO.response.artist.image_url,
    name: DTO.response.artist.name
  }
});

export default artistInfoMapper;
