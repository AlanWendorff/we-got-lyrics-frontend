import { FC, useState } from 'react';
import heartIconOl from '@images/shared/heart-icon-ol.png';
import heartIconSol from '@images/shared/heart-icon-sol.png';
import styles from './AddToFav.module.scss';

const AddToFav: FC = () => {
  const [isOnFav, setIsOnFav] = useState(false);

  const handleSetIsOnFav = () => {
    setIsOnFav(!isOnFav);
  };

  return (
    <button className={styles.container} onClick={handleSetIsOnFav}>
      <img src={isOnFav ? heartIconSol : heartIconOl} alt='heart icon' />
      {isOnFav ? 'Saved' : 'Save'}
    </button>
  );
};

export default AddToFav;
