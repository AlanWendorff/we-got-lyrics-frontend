import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Top from './components/Top';
import songRepository from '@core/song/infrastructure/repositories/Song.repository';
import songController from '@core/song/application/SongController';
import TSong from '@core/song/domain/models/Song.model';
import styles from './Song.module.scss';

const Song = () => {
  const { id } = useParams();
  const [song, setSong] = useState<TSong | null>(null);

  useEffect(() => {
    songController(songRepository())
      .getSong(`${id}`)
      .then((response) => {
        setSong(response);
      });
  }, [id]);

  if (!song) {
    return <div>...loading</div>;
  }

  return (
    <div className={styles.container}>
      <Top>
        <Top.SongThumbnail img={song.song.song_art_image_thumbnail_url} title={song.song.title} />
        <Top.InfoContainer>
          <Top.SongMainInfo title={song.song.title} artistName={song.song.artist.name} albumName={song.song.album?.name} />

          <Top.SongContributor contributorType='Featuring' contributors={song.song.featured_artists} />
          <Top.SongContributor contributorType='Produced by' contributors={song.song.producer} />
        </Top.InfoContainer>
      </Top>

      <div className={styles.lyrics}>
        <p className={styles.lyrics__entry}>{song?.song.title} lyrics</p>
        <p className={styles.lyrics__content}>{song?.song.lyrics}</p>
      </div>
    </div>
  );
};

export default Song;
