import { ComponentProps, FC } from 'react';
import heartIconOl from '@images/shared/heart-icon-ol.png';
import heartIconSol from '@images/shared/heart-icon-sol.png';
import styles from './AddToFav.module.scss';

interface IAddToFav extends ComponentProps<'button'> {
  favouriteStatus: boolean;
}

const AddToFav: FC<IAddToFav> = ({ favouriteStatus, ...rest }) => (
  <button className={styles.container} aria-label='Add to fav' {...rest}>
    <img src={favouriteStatus ? heartIconSol : heartIconOl} alt='heart icon' />
    {favouriteStatus ? 'Saved' : 'Save'}
  </button>
);

export default AddToFav;
