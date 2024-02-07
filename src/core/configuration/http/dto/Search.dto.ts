interface ISearchDTO {
  meta: IMeta;
  response: IResponse;
}

export interface IMeta {
  status: number;
}

interface IResponse {
  hits: IHit[];
}

interface IHit {
  highlights: any[];
  index: string;
  type: string;
  result: IResult;
}

interface IResult {
  annotation_count: number;
  api_path: string;
  artist_names: string;
  full_title: string;
  header_image_thumbnail_url: string;
  header_image_url: string;
  id: number;
  lyrics_owner_id: number;
  lyrics_state: string;
  path: string;
  pyongs_count: number;
  relationships_index_url: string;
  release_date_components: IReleaseDateComponents;
  release_date_for_display: string;
  release_date_with_abbreviated_month_for_display: string;
  song_art_image_thumbnail_url: string;
  song_art_image_url: string;
  stats: IStats;
  title: string;
  title_with_featured: string;
  url: string;
  featured_artists: IFeaturedArtist[];
  primary_artist: IPrimaryArtist;
}

interface IReleaseDateComponents {
  year: number;
  month: number;
  day: number;
}

interface IStats {
  unreviewed_annotations: number;
  concurrents?: number;
  hot: boolean;
  pageviews: number;
}

interface IFeaturedArtist {
  api_path: string;
  header_image_url: string;
  id: number;
  image_url: string;
  is_meme_verified: boolean;
  is_verified: boolean;
  name: string;
  url: string;
  iq?: number;
}

interface IPrimaryArtist {
  api_path: string;
  header_image_url: string;
  id: number;
  image_url: string;
  is_meme_verified: boolean;
  is_verified: boolean;
  name: string;
  url: string;
  iq?: number;
}

export default ISearchDTO;
