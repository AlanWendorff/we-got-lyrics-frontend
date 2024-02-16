import TCharts from '../models/Charts.model';

interface IChartsRepository {
  getCharts: () => Promise<TCharts>;
}

export default IChartsRepository;
