import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { generateArtistMsg } from '@/utils/generateSocialMsg';
import { APP_NAME } from '@/constants/config';
import artistInfoRepository from '@core/artistInfo/infrastructure/repositories/ArtistInfo.repository';
import artistInfoController from '@core/artistInfo/application/ArtistInfo.controller';
import TArtistInfo from '@core/artistInfo/domain/models/ArtistInfo.model';
import TArtistSongs from '@core/artistInfo/domain/models/ArtistSongs.model';
import PopularSongs from './components/PopularSongs';
import AddToFav from '@/components/shared/AddToFav';
import Description from './components/Description';
import useFavourite from '@/hooks/useFavourite';
import Thumbnail from './components/Thumbnail';
import Share from '@/components/shared/Share';
import Identity from './components/Identity';
import AllSongs from './components/AllSongs';
import Banner from './components/Banner';
import useTabName from '@/hooks/useTabName';
import styles from './ArtistInfo.module.scss';

const ArtistInfo: FC = () => {
  const { isArtistStored, handleArtistFav, handleIsArtistStored } = useFavourite();
  const { id } = useParams();

  const [artistSongs, setArtistSongs] = useState<TArtistSongs | null>(null);
  const [artistInfo, setArtistInfo] = useState<TArtistInfo | null>(null);
  const [isAllSongs, setIsAllSongs] = useState(false);

  useTabName({ tabName: `${artistInfo?.artist.name} | ${APP_NAME}`, dynamicInfo: artistInfo?.artist.name });

  const handleSetIsAllSongs = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsAllSongs(!isAllSongs);
  };

  useEffect(() => {
    setArtistInfo(null);
    setArtistSongs(null);
    setIsAllSongs(false);
    handleIsArtistStored(`${id}`);

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

      <div className={styles.body}>
        {artistInfo && id && (
          <div className={styles.controls}>
            <AddToFav
              favouriteStatus={isArtistStored}
              onClick={() => handleArtistFav({ id: parseInt(id), name: artistInfo.artist.name, thumbnail: artistInfo.artist.image_url })}
            />

            <Share message={generateArtistMsg(artistInfo.artist.name)} />
          </div>
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
