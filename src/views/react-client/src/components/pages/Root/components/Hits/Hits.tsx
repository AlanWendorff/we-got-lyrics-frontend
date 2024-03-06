import { FC, useEffect, useState } from 'react';
import chartsController from '@core/charts/application/charts.controller';
import chartsRepository from '@core/charts/infrastructure/repositories/Charts.repository';
import TCharts from '@core/charts/domain/models/Charts.model';
import fireIcon from '@images/shared/fire-icon.png';
import HitList from './components/HitList';
import styles from './Hits.module.scss';

const Hits: FC = () => {
  const [hits, setHits] = useState<TCharts | null>(null);

  useEffect(() => {
    chartsController(chartsRepository())
      .getCharts()
      .then((response) => {
        setHits(response);
      });
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.title}>
        <img src={fireIcon} alt='fire icon' />
        Top Hits
      </p>
      <HitList hits={hits?.charts} />
    </div>
  );
};

export default Hits;
