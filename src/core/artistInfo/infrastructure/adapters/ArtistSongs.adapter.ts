import ISongsDTO from '../../domain/dto/Songs.dto';
import TArtistSongs from '../../domain/models/ArtistSongs.model';

const artistSongsAdapter = (dto: ISongsDTO): TArtistSongs => ({
  songs: dto.response.songs.map(({ id, song_art_image_thumbnail_url, title, stats, artist_names }) => ({
    id,
    thumbnail_url: song_art_image_thumbnail_url,
    title,
    pageviews: stats.pageviews,
    artist: artist_names
  })),
  next_page: dto.response.next_page
});

export default artistSongsAdapter;
