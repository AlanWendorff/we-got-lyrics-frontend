import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Banner from './components/Banner';
import Thumbnail from './components/Thumbnail';
import artistInfoController from '@core/artistInfo/application/ArtistInfo.controller';
import artistInfoRepository from '@core/artistInfo/infrastructure/repositories/ArtistInfo.repository';
import TArtistInfo from '@core/artistInfo/domain/models/ArtistInfo.model';
import styles from './ArtistInfo.module.scss';
import TArtistSongs from '@core/artistInfo/domain/models/ArtistSongs.model';
import PopularSongs from './components/PopularSongs';
import Identity from './components/Identity';
import Description from './components/Description';

const ArtistInfo = () => {
  const { id } = useParams();
  const [artistInfo, setArtistInfo] = useState<TArtistInfo | null>(null);
  const [artistSongs, setArtistSongs] = useState<TArtistSongs | null>(null);

  useEffect(() => {
    setArtistInfo(null);
    setArtistSongs(null);

    artistInfoController(artistInfoRepository())
      .getArtistInfo(`${id}`)
      .then((response) => {
        setArtistInfo(response);
      });

    artistInfoController(artistInfoRepository())
      .getArtistSongs(`${id}`, 5, 1)
      .then((response) => {
        setArtistSongs(response);
      });
  }, [id]);

  return (
    <div className={styles.container}>
      <Banner banner={artistInfo?.artist.header_image_url} bannerColors={artistInfo?.artist.header_image_colors} />

      <div className={styles.top}>
        <Thumbnail image={artistInfo?.artist.image_url} />
        <Identity name={artistInfo?.artist.name} aka={artistInfo?.artist.alternate_names} />
      </div>

      <div className={styles.body}>
        <PopularSongs artistName={artistInfo?.artist.name} songs={artistSongs?.songs} />
        <Description name={artistInfo?.artist.name} description={artistInfo?.artist.description} />
      </div>
    </div>
  );
};

export default ArtistInfo;
