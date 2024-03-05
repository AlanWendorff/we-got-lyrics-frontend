import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Lyrics from './components/Lyrics';
import Thumbnail from './components/Thumbnail';
import Banner from './components/Banner';
import Identity from './components/Identity';
import Contributor from './components/Contributor';
import songRepository from '@core/song/infrastructure/repositories/Song.repository';
import songController from '@core/song/application/SongController';
import TSong from '@core/song/domain/models/Song.model';
import lyricsRepository from '@core/lyrics/infrastructure/repositories/Lyrics.repository';
import lyricsController from '@core/lyrics/application/LyricsController';
import TLyricsData from '@core/lyrics/domain/models/Lyrics.model';
import styles from './Song.module.scss';

const Song = () => {
  const { id, name } = useParams();
  const [song, setSong] = useState<TSong | null>(null);
  const [lyrics, setLyrics] = useState<TLyricsData | null>(null);

  useEffect(() => {
    setSong(null);
    setLyrics(null);

    if (id === '_') {
      songController(songRepository())
        .getSong('000', `${name}`)
        .then((response) => {
          setSong(response);

          lyricsController(lyricsRepository())
            .getLyrics(response.song.url)
            .then((response) => {
              setLyrics(response);
            });
        });

      return;
    }

    songController(songRepository())
      .getSong(`${id}`, '')
      .then((response) => {
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
      <Banner bannerColors={song?.song.header_image_colors} />

      <div className={styles.top}>
        <Thumbnail image={song?.song.song_art_image_thumbnail_url} title={song?.song.title} />
        <div>
          <Identity
            artistId={song?.song.artist.id}
            title={song?.song.title}
            artistName={song?.song.artist.name}
            albumName={song?.song.album?.name}
          />
          <div className={styles.contributors_desktop}>
            <Contributor type='Featuring' contributors={song?.song.featured_artists} />
            <Contributor type='Produced by' contributors={song?.song.producer} />
          </div>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.contributors_mobile}>
          <Contributor type='Featuring' contributors={song?.song.featured_artists} />
          <Contributor type='Produced by' contributors={song?.song.producer} />
        </div>

        <Lyrics songTitle={song?.song.title} lyrics={lyrics?.lyrics} />
      </div>
    </div>
  );
};

export default Song;
