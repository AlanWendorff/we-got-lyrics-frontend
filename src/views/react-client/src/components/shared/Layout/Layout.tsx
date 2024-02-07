import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Search from '@/components/features/Search';
import Song from '@/components/pages/Song';
import Root from '@/components/pages/Root';
import ArtistInfo from '@/components/pages/ArtistInfo';
import { ROOT, ARTIST, SONG } from '@/constants/routes';

const Layout = () => {
  return (
    <BrowserRouter>
      <Search />
      <Routes>
        <Route path={ROOT} element={<Root />} />
        <Route path={ARTIST} element={<ArtistInfo />} />
        <Route path={SONG} element={<Song />} />
        <Route path='*' element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
