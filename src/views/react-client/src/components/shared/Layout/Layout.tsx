import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Search from './components/Search';
import Song from '@/components/pages/Song';
import Root from '@/components/pages/Root';
import ArtistInfo from '@/components/pages/ArtistInfo';
import { ROOT, ARTIST, SONG } from '@/constants/routes';
import 'react-loading-skeleton/dist/skeleton.css';

const Layout = () => (
  <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
    <BrowserRouter>
      <Search />
      <Routes>
        <Route path={ROOT} element={<Root />} />
        <Route path={ARTIST} element={<ArtistInfo />} />
        <Route path={SONG} element={<Song />} />
        <Route path='*' element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </BrowserRouter>
  </SkeletonTheme>
);

export default Layout;
