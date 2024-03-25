interface ICharts {
  charts: IHit[];
}

interface IHit {
  id: number;
  url: string;
  img: string;
  title: string;
  owner: string;
  pageviews: string;
}

export default ICharts;
