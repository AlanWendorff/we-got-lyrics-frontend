import { useParams } from 'react-router-dom';
import styles from './ArtistInfo.module.scss';
import { useEffect, useState } from 'react';
import artistInfoController from '@core/artistInfo/application/ArtistInfo.controller';
import artistInfoRepository from '@core/artistInfo/infrastructure/repositories/ArtistInfo.repository';
import TArtistInfo from '@core/artistInfo/domain/models/ArtistInfo.model';

const ArtistInfo = () => {
  const { id } = useParams();
  console.log('Artist ID:', id);
  const [artistInfo, setArtistInfo] = useState<TArtistInfo | null>(null);

  useEffect(() => {
    artistInfoController(artistInfoRepository())
      .getArtistInfo(`${id}`)
      .then((response) => {
        setArtistInfo(response);
      });
  }, []);

  console.log(artistInfo);

  return <div className={styles.container}>ArtistInfo</div>;
};

export default ArtistInfo;
