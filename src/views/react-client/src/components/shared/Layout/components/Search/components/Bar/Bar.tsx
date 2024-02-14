import { FC, ComponentProps } from 'react';
import magnifierIcon from '@images/shared/magnifier-icon.webp';
import styles from './Bar.module.scss';

interface IBarProps extends ComponentProps<'form'> {}

const Bar: FC<IBarProps> = ({ ...rest }) => (
  <form className={styles.container} {...rest}>
    <input name='artist' className={styles.input__search} placeholder='Search' autoComplete='off' />
    <img className={styles.search__icon} src={magnifierIcon} alt='magnifier icon' />
  </form>
);

export default Bar;
