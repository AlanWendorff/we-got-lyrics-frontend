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
import AllSongs from './components/AllSongs';
import useTabName from '@/hooks/useTabName';
import { APP_NAME } from '@/constants/config';
import AddToFav from '@/components/shared/AddToFav';
import useFavourite from '@/hooks/useFavourite';

const ArtistInfo = () => {
  const { id } = useParams();
  const [artistInfo, setArtistInfo] = useState<TArtistInfo | null>(null);
  const [artistSongs, setArtistSongs] = useState<TArtistSongs | null>(null);
  const [isAllSongs, setIsAllSongs] = useState(false);
  const { isArtistStored, handleArtistFav } = useFavourite();

  useTabName({ tabName: `${artistInfo?.artist.name} | ${APP_NAME}`, dynamicInfo: artistInfo?.artist.name });

  const handleSetIsAllSongs = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsAllSongs(!isAllSongs);
  };

  useEffect(() => {
    setArtistInfo(null);
    setArtistSongs(null);
    setIsAllSongs(false);

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
      <Banner
        className={isAllSongs ? styles.banner__collapse : ''}
        banner={artistInfo?.artist.header_image_url}
        bannerColors={artistInfo?.artist.header_image_colors}
      />

      <div className={`${styles.top} ${isAllSongs && styles.top__collapse}`}>
        <Thumbnail image={artistInfo?.artist.image_url} />
        <Identity name={artistInfo?.artist.name} aka={artistInfo?.artist.alternate_names} />
      </div>

      <div className={`${styles.body}`}>
        {artistInfo && id && (
          <AddToFav
            favouriteStatus={isArtistStored}
            onClick={() => handleArtistFav({ id: parseInt(id), name: artistInfo?.artist.name, thumbnail: artistInfo?.artist.image_url })}
          />
        )}
        {isAllSongs ? (
          <AllSongs
            artistId={id}
            artistThumbnail={artistInfo?.artist.image_url}
            artistName={artistInfo?.artist.name}
            handleSetIsAllSongs={handleSetIsAllSongs}
          />
        ) : (
          <PopularSongs artistName={artistInfo?.artist.name} songs={artistSongs?.songs} handleSetIsAllSongs={handleSetIsAllSongs} />
        )}
        {!isAllSongs && <Description name={artistInfo?.artist.name} description={artistInfo?.artist.description} />}
      </div>
    </div>
  );
};

export default ArtistInfo;
