import { FC } from 'react';
import { generateArtistMsg } from '@/utils/generateSocialMsg';
import Skeleton from 'react-loading-skeleton';
import AddToFav from '@/components/shared/AddToFav';
import Share from '@/components/shared/Share';
import TArtistInfoModel from '@core/artistInfo/domain/models/ArtistInfo.model';
import { TArtistModel } from '@core/storeAssets/domain/models/StoreAssets.model';
import styles from './Controls.module.scss';

interface IControlsProps {
  isArtistStored: boolean;
  artistId: number;
  artistInfo: TArtistInfoModel | null;
  handleArtistFav: (artist: TArtistModel) => void;
}

const Controls: FC<IControlsProps> = ({ isArtistStored, artistId, artistInfo, handleArtistFav }) => {
  if (!artistInfo) {
    return (
      <div className={styles.container}>
        <Skeleton width={93} height={31} />
        <Skeleton width={85} height={31} />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <AddToFav
        favouriteStatus={isArtistStored}
        onClick={() => handleArtistFav({ id: artistId, name: artistInfo.artist.name, thumbnail: artistInfo.artist.image_url })}
      />

      <Share message={generateArtistMsg(artistInfo.artist.name)} />
    </div>
  );
};
export default Controls;
