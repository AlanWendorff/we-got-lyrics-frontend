import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { SkeletonTheme } from 'react-loading-skeleton';
import Top from './components/Top';
import Sidebar from './components/Sidebar';
import ArtistInfo from '@/components/pages/ArtistInfo';
import MobileNavbar from './components/MobileNavbar';
import Song from '@/components/pages/Song';
import Root from '@/components/pages/Root';
import NotFound from '@/components/pages/NotFound';
import { ROOT, ARTIST, SONG } from '@/constants/routes';

const Layout = () => (
  <SkeletonTheme baseColor='#2a2a2a' highlightColor='#525252'>
    <BrowserRouter>
      <Sidebar />
      <Top />
      <Routes>
        <Route path={ROOT} element={<Root />} />
        <Route path={ARTIST} element={<ArtistInfo />} />
        <Route path={SONG} element={<Song />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <MobileNavbar />
    </BrowserRouter>
  </SkeletonTheme>
);

export default Layout;
