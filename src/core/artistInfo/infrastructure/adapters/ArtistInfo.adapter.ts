import IArtistInfoDTO from '../../domain/dto/ArtistInfo.dto';
import TArtistInfoModel from '../../domain/models/ArtistInfo.model';

const artistInfoAdapter = (dto: IArtistInfoDTO): TArtistInfoModel => ({
  artist: {
    alternate_names: dto.response.artist.alternate_names.length === 0 ? null : dto.response.artist.alternate_names,
    description: dto.response.artist.formatted_description === '' ? null : dto.response.artist.formatted_description,
    header_image_url: dto.response.artist.header_image_url,
    header_image_colors: dto.response.artist.header_image_colors,
    image_url: dto.response.artist.image_url,
    name: dto.response.artist.name
  }
});

export default artistInfoAdapter;
