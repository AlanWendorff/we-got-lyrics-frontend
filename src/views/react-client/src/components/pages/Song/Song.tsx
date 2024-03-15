import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useThemeColor from '@/hooks/useThemeColor';
import useFavourite from '@/hooks/useFavourite';
import useTabName from '@/hooks/useTabName';
import lyricsRepository from '@core/lyrics/infrastructure/repositories/Lyrics.repository';
import lyricsController from '@core/lyrics/application/Lyrics.controller';
import getSongByName from '@/services/getSongByName';
import getSongById from '@/services/getSongById';
import TLyricsData from '@core/lyrics/domain/models/Lyrics.model';
import TSong from '@core/song/domain/models/Song.model';
import Contributor from './components/Contributor';
import Gradient from '@/components/shared/Gradient';
import Thumbnail from './components/Thumbnail';
import Controls from './components/Controls';
import Identity from './components/Identity';
import Lyrics from './components/Lyrics';
import Banner from './components/Banner';
import styles from './Song.module.scss';

const Song = () => {
  const { isSongStored, handleIsSongStored, handleSongFav } = useFavourite();
  const { id, name } = useParams();

  const [lyrics, setLyrics] = useState<TLyricsData | null>(null);
  const [song, setSong] = useState<TSong | null>(null);

  useTabName({ tabName: `${song?.song.title} Lyrics`, dynamicInfo: song?.song.title });
  useThemeColor({ color: String(song?.song.header_image_colors.Vibrant), dynamicInfo: song?.song.header_image_colors.Vibrant });

  useEffect(() => {
    setLyrics(null);
    setSong(null);

    if (id === '_') {
      getSongByName(String(name)).then((response) => {
        setSong(response);
        handleIsSongStored(String(response?.song.id));

        lyricsController(lyricsRepository())
          .getLyrics(response.song.url)
          .then((response) => {
            setLyrics(response);
          });
      });

      return;
    }

    handleIsSongStored(String(id));

    getSongById(String(id)).then((response) => {
      setSong(response);

      lyricsController(lyricsRepository())
        .getLyrics(response.song.url)
        .then((response) => {
          setLyrics(response);
        });
    });
  }, [id]);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Banner bannerColors={song?.song.header_image_colors} />

        <div className={styles.absolute}>
          <Thumbnail image={song?.song.song_art_image_thumbnail_url} title={song?.song.title} />

          <Identity
            artistId={song?.song.artist.id}
            title={song?.song.title}
            artistName={song?.song.artist.name}
            albumName={song?.song.album?.name}
            date={song?.song.release_date_with_abbreviated_month_for_display}
            views={song?.song.pageviews}
          />
        </div>

        <Gradient color={String(song?.song.header_image_colors.Vibrant)} />
      </div>

      <div className={styles.body}>
        <Controls isSongStored={isSongStored} song={song} handleSongFav={handleSongFav} />

        <div className={styles.contributors}>
          <Contributor type='Featuring' contributors={song?.song.featured_artists} />
          <Contributor type='Produced by' contributors={song?.song.producer} />
        </div>

        <Lyrics songTitle={song?.song.title} lyrics={lyrics?.lyrics} />
      </div>
    </div>
  );
};

export default Song;
