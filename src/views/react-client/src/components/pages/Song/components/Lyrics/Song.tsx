import { useParams } from 'react-router-dom';
import styles from './Song.module.scss';
import { useEffect, useState } from 'react';
import songController from '@core/song/application/SongController';
import songRepository from '@core/song/infrastructure/repositories/Song.repository';
import TSong from '@core/song/domain/models/Song.model';

const Song = () => {
  const { id } = useParams();
  console.log('Song ID:', id);
  const [song, setSong] = useState<TSong | null>(null);

  useEffect(() => {
    songController(songRepository())
      .getSong(`${id}`)
      .then((response) => {
        setSong(response);
      });
  }, [id]);

  console.log(song?.song);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <img src={song?.song.song_art_image_thumbnail_url} alt={`${song?.song.title} thumbnail`} />

        <div className={styles.general__info}>
          <div className={styles.info}>
            <p className={styles.info__title}>{song?.song.title}</p>
            <p className={styles.info__subtitle}>
              <span>{song?.song.artist.name}</span> • Track on <span>{song?.song.album?.name}</span>
            </p>

            {song?.song.featured_artists && (
              <div className={styles.info__creators}>
                <p>Featuring</p>
                {song?.song.featured_artists.map((producer) => (
                  <span>{producer}</span>
                ))}
              </div>
            )}

            {song?.song.producer && (
              <div className={styles.info__creators}>
                <p>Produced by</p>
                {song?.song.producer.map((producer) => (
                  <span>{producer}</span>
                ))}
              </div>
            )}
          </div>

          {/* <p>{song?.song.pageviews}</p> */}
        </div>
      </div>

      <div className={styles.lyrics}>
        <p className={styles.lyrics__entry}>{song?.song.title} lyrics</p>
        <p className={styles.lyrics__content}>{song?.song.lyrics}</p>
      </div>
    </div>
  );
};

export default Song;
