import http from '../../../configuration/http/Http';
import IChartsRepository from '../../domain/repositories/Charts.repository';
import IChartsDTO from '../../domain/dto/Charts.dto';
import { BASE_URL } from '../../../configuration/constants/env';
import chartsAdapter from '../adapters/Charts.adapter';

const chartsRepository = (): IChartsRepository => ({
  getCharts: async () => {
    try {
      const response = await http.get<IChartsDTO>(`${BASE_URL}/charts`);
      return chartsAdapter(response);
    } catch (error) {
      throw new Error(`Error getting: ${error}`);
    }
  }
});

export default chartsRepository;
