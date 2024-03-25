import ISongDTO from '../../domain/dto/Song.dto';
import TSongDetailModel from '../../domain/models/Song.model';

const songAdapter = (dto: ISongDTO): TSongDetailModel => {
  const { song } = dto.response;

  return {
    song: {
      id: song.id,
      title: song.title,
      embed_content: song.embed_content,
      release_date_with_abbreviated_month_for_display: song.release_date_with_abbreviated_month_for_display,
      song_art_image_thumbnail_url: song.song_art_image_thumbnail_url,
      header_image_colors: song.header_image_colors,
      pageviews: song.stats.pageviews ?? null,
      album: song.album
        ? {
            id: song.album.id,
            name: song.album.name
          }
        : null,
      artist: {
        id: song.primary_artist.id,
        name: song.primary_artist.name,
        image_url: song.primary_artist.image_url
      },
      featured_artists: song.featured_artists.length === 0 ? [] : song.featured_artists.map(({ name }) => name),
      producer: song.producer_artists.length === 0 ? [] : song.producer_artists.map(({ name }) => name),
      url: song.url
    }
  };
};

export default songAdapter;
