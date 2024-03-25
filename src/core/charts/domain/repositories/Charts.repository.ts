import TChartsModel from '../models/Charts.model';

interface IChartsRepository {
  getCharts: () => Promise<TChartsModel>;
}

export default IChartsRepository;
