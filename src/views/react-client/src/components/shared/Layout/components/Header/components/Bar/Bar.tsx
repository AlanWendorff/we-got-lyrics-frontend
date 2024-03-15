import { FC, ComponentProps } from 'react';
import { useLocation } from 'react-router-dom';
import { ROOT, STORED_ARTISTS, STORED_SONGS } from '@/constants/routes';
import magnifierIcon from '@images/shared/magnifier-icon.webp';
import styles from './Bar.module.scss';

interface IBarProps extends ComponentProps<'form'> {}

const Bar: FC<IBarProps> = ({ ...rest }) => {
  const location = useLocation();
  const mimetize = location.pathname !== ROOT && location.pathname !== STORED_SONGS && location.pathname !== STORED_ARTISTS;

  return (
    <form className={styles.container} {...rest}>
      <input name='search' className={`${styles.input} ${mimetize && styles.input__mimetize}`} placeholder='Search' autoComplete='off' />
      <div className={styles.iconContainer}>
        <img className={styles.icon} src={magnifierIcon} alt='magnifier icon' />
      </div>
    </form>
  );
};

export default Bar;
