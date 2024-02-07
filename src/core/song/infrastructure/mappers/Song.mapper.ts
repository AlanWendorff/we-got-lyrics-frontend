import ISongDTO from '@/core/configuration/http/dto/Song.dto';
import TSongData from '../../domain/models/Song.model';

const songMapper = (DTO: ISongDTO): TSongData => {
  const { song } = DTO.response;

  return {
    meta: DTO.meta,
    song: {
      id: song.id,
      title: song.title,
      embed_content: song.embed_content,
      release_date_with_abbreviated_month_for_display: song.release_date_with_abbreviated_month_for_display,
      song_art_image_thumbnail_url: song.song_art_image_thumbnail_url,
      pageviews: song.stats.pageviews ?? undefined,
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
      featured_artists: song.featured_artists.length === 0 ? undefined : song.featured_artists.map(({ name }) => name),
      producer: song.producer_artists.length === 0 ? undefined : song.producer_artists.map(({ name }) => name),
      lyrics: song.lyrics
    }
  };
};

export default songMapper;
