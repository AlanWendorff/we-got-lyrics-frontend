import http from '../../../configuration/http/Http';
import IChartsRepository from '../../domain/repositories/Charts.repository';
import IChartsDTO from '../../domain/dto/Charts.dto';
import { BASE_URL } from '../../../configuration/constants/env';

const chartsRepository = (): IChartsRepository => ({
  getCharts: async () => {
    try {
      return await http.get<IChartsDTO>(`${BASE_URL}/charts`);
    } catch (error) {
      throw new Error(`Error getting user: ${error}`);
    }
  }
});

export default chartsRepository;
