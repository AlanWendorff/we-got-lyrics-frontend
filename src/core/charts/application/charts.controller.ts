import IChartsRepository from '../domain/repositories/Charts.repository';
import chartsService from '../domain/services/Charts.service';

interface IChartsController extends IChartsRepository {}

const chartsController = (repository: IChartsRepository): IChartsController => ({
  getCharts: () => {
    return chartsService(repository).getCharts();
  }
});

export default chartsController;
