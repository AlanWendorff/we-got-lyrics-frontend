import { FC } from 'react';
import Search from './components/Search';
import styles from './Top.module.scss';

const Top: FC = () => (
  <div className={styles.container}>
    <Search />
  </div>
);

export default Top;
