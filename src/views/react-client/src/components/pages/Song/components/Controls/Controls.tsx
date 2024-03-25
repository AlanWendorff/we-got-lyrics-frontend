import { FC } from 'react';
import { generateSongMsg } from '@/utils/generateSocialMsg';
import { TLocalStorageSongModel } from '@core/storeAssets/domain/models/StoreAssets.model';
import TSongInfo from '@core/song/domain/models/Song.model';
import Skeleton from 'react-loading-skeleton';
import AddToFav from '@/components/shared/AddToFav';
import Share from '@/components/shared/Share';
import styles from './Controls.module.scss';

interface IControlsProps {
  isSongStored: boolean;
  song: TSongInfo | null;
  handleSongFav: (song: TLocalStorageSongModel) => void;
}

const Controls: FC<IControlsProps> = ({ isSongStored, song, handleSongFav }) => {
  if (!song) {
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
        favouriteStatus={isSongStored}
        onClick={() =>
          handleSongFav({
            id: song.song.id,
            name: song.song.title,
            owner: song.song.artist.name,
            thumbnail: song.song.song_art_image_thumbnail_url
          })
        }
      />

      <Share message={generateSongMsg(song.song.title, song.song.artist.name)} />
    </div>
  );
};
export default Controls;
