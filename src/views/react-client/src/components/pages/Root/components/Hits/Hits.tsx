import { FC, useEffect, useRef, useState } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import chartsRepository from '@core/charts/infrastructure/repositories/Charts.repository';
import chartsController from '@core/charts/application/charts.controller';
import TCharts from '@core/charts/domain/models/Charts.model';
import fireIcon from '@images/shared/fire-icon.png';
import Shadow from '@/components/shared/Shadow';
import HitList from './components/HitList';
import styles from './Hits.module.scss';

const Hits: FC = () => {
  const [showShadow, setShowShadow] = useState(false);
  const [hits, setHits] = useState<TCharts | null>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const { scrollY } = useScroll({
    container: listRef
  });

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setShowShadow(latest > 1);
  });

  useEffect(() => {
    chartsController(chartsRepository())
      .getCharts()
      .then((response) => {
        setHits(response);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <img src={fireIcon} alt='fire icon' />
        Top Hits
        {showShadow && <Shadow className={styles.customShadow} />}
      </h2>

      <HitList hits={hits?.charts} innerRef={listRef} />
    </div>
  );
};

export default Hits;
