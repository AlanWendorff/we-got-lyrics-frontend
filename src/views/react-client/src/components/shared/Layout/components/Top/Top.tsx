import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import HomeBtn from './components/HomeBtn';
import Search from './components/Search';
import styles from './Top.module.scss';
import { ROOT } from '@/constants/routes';

const Top: FC = () => {
  const location = useLocation();
  const [isHomeBtnShow, setIsHomeBtnShow] = useState(false);

  useEffect(() => {
    if (location.pathname === ROOT) {
      setIsHomeBtnShow(false);
      return;
    }

    setIsHomeBtnShow(true);
  }, [location]);

  return (
    <div className={styles.container}>
      {isHomeBtnShow && <HomeBtn />}
      <Search isHomeBtnShow={isHomeBtnShow} />
    </div>
  );
};
export default Top;
