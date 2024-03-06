import { FC } from 'react';
import heartIconOl from '@images/shared/heart-icon-ol.png';
import heartIconSol from '@images/shared/heart-icon-sol.png';
import styles from './AddToFav.module.scss';
import useAddSongToFav from '@/hooks/useAddSongToFav';
import ISong from '@/interfaces/songOnLocalStorage.interface';

interface IAddToFav {
  song: ISong;
}

const AddToFav: FC<IAddToFav> = ({ song }) => {
  const { isOnFav, handleSetIsOnFav } = useAddSongToFav();

  return (
    <button className={styles.container} onClick={() => handleSetIsOnFav(song)} aria-label='Add to fav'>
      <img src={isOnFav ? heartIconSol : heartIconOl} alt='heart icon' />
      {isOnFav ? 'Saved' : 'Save'}
    </button>
  );
};

export default AddToFav;
