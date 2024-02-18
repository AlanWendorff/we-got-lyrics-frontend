import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import artistInfoController from '@core/artistInfo/application/ArtistInfo.controller';
import artistInfoRepository from '@core/artistInfo/infrastructure/repositories/ArtistInfo.repository';
import TArtistSongs from '@core/artistInfo/domain/models/ArtistSongs.model';
import HitList from './components/HitList';
import styles from './ArtistAllSongs.module.scss';
import TArtistInfo from '@core/artistInfo/domain/models/ArtistInfo.model';

const ArtistAllSongs: FC = () => {
  const { id } = useParams();
  const [artistInfo, setArtistInfo] = useState<TArtistInfo | null>(null);
  const [artistSongs, setArtistSongs] = useState<TArtistSongs | null>(null);

  useEffect(() => {
    artistInfoController(artistInfoRepository())
      .getArtistInfo(`${id}`)
      .then((response) => {
        setArtistInfo(response);
      });

    artistInfoController(artistInfoRepository())
      .getArtistSongs(`${id}`, 15, 1)
      .then((response) => {
        setArtistSongs(response);
      });
  }, []);

  console.log(artistSongs);

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <p className={styles.title}>ALL "" SONGS</p>
        {/*  <HitList hits={hits?.charts} /> */}
      </div>
    </div>
  );
};

export default ArtistAllSongs;
