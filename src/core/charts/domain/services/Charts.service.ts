import IChartsRepository from '../repositories/Charts.repository';

interface IChartsService extends IChartsRepository {}

const chartsService = (repository: IChartsRepository): IChartsService => ({
  getCharts: () => {
    return repository.getCharts();
  }
});

export default chartsService;
