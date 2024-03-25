type TChartsModel = {
  charts: THitModel[];
};

export type THitModel = {
  id: number;
  url: string;
  img: string;
  title: string;
  owner: string;
  pageviews: string;
};

export default TChartsModel;
