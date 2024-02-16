import Hits from './components/Hits';
import RecentlyArtists from './components/RecentlyArtists';
import RecentlySongs from './components/RecentlySongs';
import styles from './Root.module.scss';

const Root = () => (
  <div className={styles.container}>
    <Hits />
    {/* <RecentlySongs />
    <RecentlyArtists /> */}
  </div>
);

export default Root;
