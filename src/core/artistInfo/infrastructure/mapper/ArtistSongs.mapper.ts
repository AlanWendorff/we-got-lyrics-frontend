import ISongsDTO from '../../../../core/configuration/http/dto/Songs.dto';
import TArtistSongs from '../../domain/models/ArtistSongs.model';

const artistSongsMapper = (DTO: ISongsDTO): TArtistSongs => ({
  meta: DTO.meta,
  songs: DTO.response.songs.map(({ id, song_art_image_thumbnail_url, title, stats, artist_names }) => ({
    id,
    thumbnail_url: song_art_image_thumbnail_url,
    title,
    pageviews: stats.pageviews,
    artist: artist_names
  })),
  next_page: DTO.response.next_page
});

export default artistSongsMapper;
