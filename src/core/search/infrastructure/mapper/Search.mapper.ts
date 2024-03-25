import ISearchDTO from '../../domain/dto/Search.dto';
import TSearch from '../../domain/models/Search.model';

const arraySizeLimit = window.innerWidth < 1024 ? 7 : 4;

const searchMapper = (DTO: ISearchDTO, input: string): TSearch => {
  const songs = DTO.response.hits
    .map(({ result }) => ({
      id: result.id,
      api_path: result.api_path,
      name: result.title,
      artist_name: result.primary_artist.name,
      image_thumbnail: result.header_image_thumbnail_url
    }))
    .slice(0, arraySizeLimit);

  const unorderedArtists = DTO.response.hits.map(({ result }) => {
    const { primary_artist } = result;

    return {
      id: primary_artist.id,
      api_path: primary_artist.api_path,
      name: primary_artist.name,
      image_thumbnail: primary_artist.header_image_url
    };
  });

  const artistsByInput = unorderedArtists.filter(({ name }) => name.toLowerCase().includes(input.toLowerCase()));
  const artists = artistsByInput
    .filter((value, index, self) => index === self.findIndex(({ id }) => id === value.id))
    .slice(0, arraySizeLimit);

  return {
    searched_data: {
      songs,
      artists
    }
  };
};

export default searchMapper;
