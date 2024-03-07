import { FC, ComponentProps } from 'react';
import magnifierIcon from '@images/shared/magnifier-icon.webp';
import { useLocation } from 'react-router-dom';
import { ROOT } from '@/constants/routes';
import styles from './Bar.module.scss';

interface IBarProps extends ComponentProps<'form'> {}

const Bar: FC<IBarProps> = ({ ...rest }) => {
  const location = useLocation();
  const isWebOnRoot = location.pathname !== ROOT;

  return (
    <form className={styles.container} {...rest}>
      <input
        name='artist'
        className={`${styles.input__search} ${isWebOnRoot && styles.mimetize}`}
        placeholder='Search'
        autoComplete='off'
      />
      <div className={styles.icon__container}>
        <img className={styles.icon} src={magnifierIcon} alt='magnifier icon' />
      </div>
    </form>
  );
};

export default Bar;
