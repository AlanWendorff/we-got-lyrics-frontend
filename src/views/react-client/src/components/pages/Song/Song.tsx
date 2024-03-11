import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { generateSongMsg } from '@/utils/generateSocialMsg';
import useFavourite from '@/hooks/useFavourite';
import useTabName from '@/hooks/useTabName';
import lyricsRepository from '@core/lyrics/infrastructure/repositories/Lyrics.repository';
import lyricsController from '@core/lyrics/application/Lyrics.controller';
import getSongByName from '@/services/getSongByName';
import getSongById from '@/services/getSongById';
import TLyricsData from '@core/lyrics/domain/models/Lyrics.model';
import TSong from '@core/song/domain/models/Song.model';
import AddToFav from '@/components/shared/AddToFav';
import Contributor from './components/Contributor';
import Thumbnail from './components/Thumbnail';
import Share from '@/components/shared/Share';
import Identity from './components/Identity';
import Lyrics from './components/Lyrics';
import Banner from './components/Banner';
import styles from './Song.module.scss';

const Song = () => {
  const { isSongStored, handleSongFav, handleIsSongStored } = useFavourite();
  const { id, name } = useParams();

  const [lyrics, setLyrics] = useState<TLyricsData | null>(null);
  const [song, setSong] = useState<TSong | null>(null);

  useTabName({ tabName: `${song?.song.title} Lyrics`, dynamicInfo: song?.song.title });

  useEffect(() => {
    handleIsSongStored(String(id));
    setLyrics(null);
    setSong(null);

    if (id === '_') {
      getSongByName(String(name)).then((response) => {
        setSong(response);

        lyricsController(lyricsRepository())
          .getLyrics(response.song.url)
          .then((response) => {
            setLyrics(response);
          });
      });

      return;
    }

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
      <Banner bannerColors={song?.song.header_image_colors} />

      <div className={styles.top}>
        <Thumbnail image={song?.song.song_art_image_thumbnail_url} title={song?.song.title} />

        <Identity
          artistId={song?.song.artist.id}
          title={song?.song.title}
          artistName={song?.song.artist.name}
          albumName={song?.song.album?.name}
        />
      </div>

      <div className={styles.body}>
        {song && (
          <div className={styles.controls}>
            <AddToFav
              favouriteStatus={isSongStored}
              onClick={() =>
                handleSongFav({
                  id: song.song.id,
                  name: song.song.title,
                  owner: song.song.artist.name,
                  thumbnail: song.song.song_art_image_thumbnail_url
                })
              }
            />

            <Share message={generateSongMsg(song.song.artist.name, song.song.title)} />
          </div>
        )}

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
