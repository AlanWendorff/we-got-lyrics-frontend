import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Top from './components/Top';
import songRepository from '@core/song/infrastructure/repositories/Song.repository';
import songController from '@core/song/application/SongController';
import TSong from '@core/song/domain/models/Song.model';
import lyricsRepository from '@core/lyrics/infrastructure/repositories/Lyrics.repository';
import lyricsController from '@core/lyrics/application/LyricsController';
import TLyricsData from '@core/lyrics/domain/models/Lyrics.model';
import styles from './Song.module.scss';
import Lyrics from './components/Lyrics';

const Song = () => {
  const { id } = useParams();
  const [song, setSong] = useState<TSong | null>(null);
  const [lyrics, setLyrics] = useState<TLyricsData | null>(null);

  useEffect(() => {
    setSong(null);
    setLyrics(null);
    songController(songRepository())
      .getSong(`${id}`)
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
      <Top>
        <Top.SongThumbnail img={song?.song.song_art_image_thumbnail_url} title={song?.song.title} />
        <Top.InfoContainer>
          <Top.SongMainInfo
            artistId={song?.song.artist.id}
            title={song?.song.title}
            artistName={song?.song.artist.name}
            albumName={song?.song.album?.name}
          />

          <Top.SongContributor contributorType='Featuring' contributors={song?.song.featured_artists} />
          <Top.SongContributor contributorType='Produced by' contributors={song?.song.producer} />
        </Top.InfoContainer>
      </Top>

      <Lyrics songTitle={song?.song.title} lyrics={lyrics?.lyrics} />
    </div>
  );
};

export default Song;
