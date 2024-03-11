import { ReactElement } from 'react';
import styles from './Aside.module.scss';
import Controls from './components/Controls';
import UserLibrary from './components/UserLibrary';

const Aside = (): ReactElement => (
  <aside className={styles.container}>
    <Controls />
    <UserLibrary />
  </aside>
);

export default Aside;
