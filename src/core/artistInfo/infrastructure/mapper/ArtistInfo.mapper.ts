import IArtistInfoDTO from '@/core/configuration/http/dto/ArtistInfo.dto';
import TArtistInfo from '../../domain/models/ArtistInfo.model';

const artistInfoMapper = (DTO: IArtistInfoDTO): TArtistInfo => ({
  id: DTO.id,
  name: DTO.name,
  img: DTO.artist_img
});

export default artistInfoMapper;
