type TSearchModel = {
  searched_data: TSearchedDataModel;
};

type TSearchedDataModel = {
  songs: TSongModel[];
  artists: TArtistModel[];
};

export type TSongModel = {
  id: number;
  api_path: string;
  name: string;
  artist_name: string;
  image_thumbnail: string;
};

export type TArtistModel = {
  id: number;
  api_path: string;
  name: string;
  image_thumbnail: string;
};

export default TSearchModel;
