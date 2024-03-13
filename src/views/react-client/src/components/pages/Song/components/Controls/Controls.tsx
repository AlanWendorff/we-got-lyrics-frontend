import { FC } from 'react';
import { generateSongMsg } from '@/utils/generateSocialMsg';
import TSong from '@core/song/domain/models/Song.model';
import Skeleton from 'react-loading-skeleton';
import AddToFav from '@/components/shared/AddToFav';
import Share from '@/components/shared/Share';
import useFavourite from '@/hooks/useFavourite';
import styles from './Controls.module.scss';

interface IControlsProps {
  isSongStored: boolean;
  song: TSong | null;
}

const Controls: FC<IControlsProps> = ({ isSongStored, song }) => {
  const { handleSongFav } = useFavourite();

  if (!song) {
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

      <Share message={generateSongMsg(song.song.artist.name, song.song.title)} />
    </div>
  );
};
export default Controls;