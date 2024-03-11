import { FC } from 'react';
import { ROOT, ARTIST, SONG, STORED_ARTISTS, STORED_SONGS } from '@/constants/routes';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { SkeletonTheme } from 'react-loading-skeleton';
import StoredArtists from '@/components/pages/StoredArtists';
import StoredSongs from '@/components/pages/StoredSongs';
import ArtistInfo from '@/components/pages/ArtistInfo';
import MobileNavbar from './components/MobileNavbar';
import NotFound from '@/components/pages/NotFound';
import Song from '@/components/pages/Song';
import Root from '@/components/pages/Root';
import Header from './components/Header';
import Aside from './components/Aside';

const Layout: FC = () => (
  <SkeletonTheme baseColor='#2a2a2a' highlightColor='#525252'>
    <BrowserRouter>
      <Aside />
      <Header />
      <Routes>
        <Route path={ROOT} element={<Root />} />
        <Route path={ARTIST} element={<ArtistInfo />} />
        <Route path={SONG} element={<Song />} />
        <Route path={STORED_ARTISTS} element={<StoredArtists />} />
        <Route path={STORED_SONGS} element={<StoredSongs />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <MobileNavbar />
    </BrowserRouter>
  </SkeletonTheme>
);

export default Layout;
