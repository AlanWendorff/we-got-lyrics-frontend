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
      pageviews: song.stats.pageviews,
      album: {
        id: song.album.id,
        name: song.album.name
      },
      artist: {
        id: song.album.id,
        name: song.album.name
      },
      featured_artists: song.featured_artists.map(({ name }) => name),
      producer: song.producer_artists.map(({ name }) => name),
      lyrics: song.lyrics
    }
  };
};

export default songMapper;
