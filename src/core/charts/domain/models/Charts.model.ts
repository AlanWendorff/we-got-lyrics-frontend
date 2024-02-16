type TCharts = {
  charts: THit[];
};

export type THit = {
  id: number;
  url: string;
  img: string;
  title: string;
  owner: string;
  pageviews: string;
};

export default TCharts;
