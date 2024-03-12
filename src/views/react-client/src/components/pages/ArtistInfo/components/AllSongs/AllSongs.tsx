import { FC, useEffect, useState } from 'react';
import artistInfoRepository from '@core/artistInfo/infrastructure/repositories/ArtistInfo.repository';
import artistInfoController from '@core/artistInfo/application/ArtistInfo.controller';
import TArtistSongs from '@core/artistInfo/domain/models/ArtistSongs.model';
import SongItem from '@/components/shared/SongItem/SongItem';
import AllSongsSkeleton from './AllSongs.skeleton';
import styles from './AllSongs.module.scss';

interface IAllSongsProps {
  artistName: string | undefined;
  artistId: string | undefined;
  artistThumbnail: string | undefined;
  handleSetIsAllSongs: () => void;
}

const AllSongs: FC<IAllSongsProps> = ({ artistId, artistName, artistThumbnail, handleSetIsAllSongs }) => {
  const [artistSongs, setArtistSongs] = useState<TArtistSongs | null>(null);

  useEffect(() => {
    setArtistSongs(null);

    artistInfoController(artistInfoRepository())
      .getArtistSongs(`${artistId}`, 50, 1)
      .then((response) => {
        setArtistSongs(response);
      });
  }, []);

  if (!artistSongs?.songs) {
    return <AllSongsSkeleton />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <img className={styles.thumbnail} src={artistThumbnail} alt='band thumbnail' />•
        <p className={styles.title}>
          All songs by <button onClick={handleSetIsAllSongs}>{artistName}</button>
        </p>
      </div>

      <ul className={styles.list}>
        {artistSongs.songs.map(({ id, thumbnail_url, title, artist }, key) => (
          <SongItem key={key} id={`${id}`} number={key + 1} title={title} thumbnail={thumbnail_url} artist={artist} showControls />
        ))}
      </ul>
    </div>
  );
};

export default AllSongs;
