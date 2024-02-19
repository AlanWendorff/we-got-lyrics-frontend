import { FC } from 'react';
import homeIcon from '@images/shared/home-icon.png';
import { Link } from 'react-router-dom';
import { ROOT } from '@/constants/routes';
import styles from './HomeBtn.module.scss';

const HomeBtn: FC = () => (
  <Link className={styles.container} to={ROOT} aria-label='go back to home'>
    <img src={homeIcon} alt='home icon' />
  </Link>
);

export default HomeBtn;
