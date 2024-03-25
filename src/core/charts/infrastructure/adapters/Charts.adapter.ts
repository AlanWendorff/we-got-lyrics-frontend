import IChartsDTO from '../../domain/dto/Charts.dto';
import TChartsModel from '../../domain/models/Charts.model';

const chartsAdapter = (dto: IChartsDTO): TChartsModel => ({
  charts: dto.charts.map(({ id, img, owner, pageviews, title, url }) => ({
    id,
    img,
    owner,
    pageviews,
    title,
    url
  }))
});

export default chartsAdapter;
