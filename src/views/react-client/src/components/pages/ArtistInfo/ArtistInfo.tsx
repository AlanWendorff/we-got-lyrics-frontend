import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Banner from './components/Top';
import Info from './components/Info';
import artistInfoController from '@core/artistInfo/application/ArtistInfo.controller';
import artistInfoRepository from '@core/artistInfo/infrastructure/repositories/ArtistInfo.repository';
import TArtistInfo from '@core/artistInfo/domain/models/ArtistInfo.model';
import styles from './ArtistInfo.module.scss';

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

  return (
    <div className={styles.container}>
      <Banner banner={artistInfo?.artist.header_image_url} />

      <Info>
        <Info.ThumbnailArtist image_thumbnail={artistInfo?.artist.image_url} />
        <Info.Name name={artistInfo?.artist.name} alternate_names={artistInfo?.artist.alternate_names} />
        <Info.Description name={artistInfo?.artist.name} description={artistInfo?.artist.description} />
      </Info>
    </div>
  );
};

export default ArtistInfo;
