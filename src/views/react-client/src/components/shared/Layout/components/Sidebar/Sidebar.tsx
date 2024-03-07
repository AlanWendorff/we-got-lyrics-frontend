import styles from './Sidebar.module.scss';
import Controls from './components/Controls';
import UserLibrary from './components/UserLibrary';

const Sidebar = () => (
  <div className={styles.container}>
    <Controls />
    <UserLibrary />
  </div>
);

export default Sidebar;
