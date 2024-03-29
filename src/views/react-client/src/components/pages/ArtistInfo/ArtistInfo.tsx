import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { APP_NAME } from '@/constants/config';
import artistInfoRepository from '@core/artistInfo/infrastructure/repositories/ArtistInfo.repository';
import artistInfoController from '@core/artistInfo/application/ArtistInfo.controller';
import TArtistInfoModel from '@core/artistInfo/domain/models/ArtistInfo.model';
import TArtistSongs from '@core/artistInfo/domain/models/ArtistSongs.model';
import useThemeColor from '@/hooks/useThemeColor';
import useTabName from '@/hooks/useTabName';
import PopularSongs from './components/PopularSongs';
import Gradient from '@/components/shared/Gradient';
import Description from './components/Description';
import useFavourite from '@/hooks/useFavourite';
import Thumbnail from './components/Thumbnail';
import Identity from './components/Identity';
import AllSongs from './components/AllSongs';
import Controls from './components/Controls';
import Banner from './components/Banner';
import styles from './ArtistInfo.module.scss';

const ArtistInfo: FC = () => {
  const { isArtistStored, handleIsArtistStored, handleArtistFav } = useFavourite();
  const { id } = useParams();

  const [artistSongs, setArtistSongs] = useState<TArtistSongs | null>(null);
  const [artistInfo, setArtistInfo] = useState<TArtistInfoModel | null>(null);
  const [isAllSongs, setIsAllSongs] = useState(false);

  useTabName({ tabName: `${artistInfo?.artist.name} | ${APP_NAME}`, dynamicInfo: artistInfo?.artist.name });
  useThemeColor({
    color: String(artistInfo?.artist.header_image_colors.Vibrant),
    dynamicInfo: artistInfo?.artist.header_image_colors.Vibrant
  });

  const artistBodyRef = document.querySelector('#artist-body') as HTMLDivElement;

  const handleSetIsAllSongs = () => {
    artistBodyRef.scrollTop = 0;
    setIsAllSongs(!isAllSongs);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (artistBodyRef) artistBodyRef.scrollTop = 0;
    setArtistInfo(null);
    setArtistSongs(null);
    setIsAllSongs(false);
    handleIsArtistStored(String(id));

    artistInfoController(artistInfoRepository())
      .getArtistInfo(String(id))
      .then((response) => {
        setArtistInfo(response);
      });

    artistInfoController(artistInfoRepository())
      .getArtistSongs(String(id), 5, 1)
      .then((response) => {
        setArtistSongs(response);
      });
  }, [id]);

  return (
    <div className={styles.container}>
      <div className={`${styles.top} ${isAllSongs && styles.top_collapse}`}>
        <Banner banner={artistInfo?.artist.header_image_url} bannerColors={artistInfo?.artist.header_image_colors} />

        <div className={styles.artistResume}>
          <Thumbnail image={artistInfo?.artist.image_url} />
          <Identity name={artistInfo?.artist.name} aka={artistInfo?.artist.alternate_names} />
        </div>

        {artistInfo && <Gradient color={String(artistInfo.artist.header_image_colors.Vibrant)} />}
      </div>

      <div className={`${styles.body} ${isAllSongs && styles.body_onExpand}`} id='artist-body'>
        {isAllSongs ? (
          <AllSongs
            artistId={id}
            artistThumbnail={artistInfo?.artist.image_url}
            artistName={artistInfo?.artist.name}
            handleSetIsAllSongs={handleSetIsAllSongs}
          />
        ) : (
          <>
            <Controls isArtistStored={isArtistStored} artistId={parseInt(id!)} artistInfo={artistInfo} handleArtistFav={handleArtistFav} />
            <PopularSongs artistName={artistInfo?.artist.name} songs={artistSongs?.songs} handleSetIsAllSongs={handleSetIsAllSongs} />
            {artistInfo?.artist.description !== null && (
              <Description name={artistInfo?.artist.name} description={artistInfo?.artist.description} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ArtistInfo;
