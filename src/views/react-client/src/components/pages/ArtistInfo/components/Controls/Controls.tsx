import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import styles from './Controls.module.scss';
import AddToFav from '@/components/shared/AddToFav';
import Share from '@/components/shared/Share';
import { generateArtistMsg } from '@/utils/generateSocialMsg';
import useFavourite from '@/hooks/useFavourite';
import TArtistInfo from '@core/artistInfo/domain/models/ArtistInfo.model';

interface IControlsProps {
  artistId: number;
  artistInfo: TArtistInfo | null;
}

const Controls: FC<IControlsProps> = ({ artistId, artistInfo }) => {
  const { isArtistStored, handleArtistFav } = useFavourite();

  if (!artistInfo || !artistId) {
    return (
      <div className={styles.container}>
        <Skeleton width={93} height={33} />
        <Skeleton width={85} height={33} />
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
