import IPalletteColorsDTO from '../../../configuration/dto/PalletteColors.dto';
import IMetaDTO from '../../../configuration/dto/Meta.dto';

export interface ISongDTO {
  meta: IMetaDTO;
  response: IResponse;
}

interface IResponse {
  song: ISong;
}

interface ISong {
  annotation_count: number;
  api_path: string;
  apple_music_id: string;
  apple_music_player_url: string;
  artist_names: string;
  description: IDescription;
  embed_content: string;
  featured_video: boolean;
  full_title: string;
  header_image_thumbnail_url: string;
  header_image_url: string;
  header_image_colors: IPalletteColorsDTO;
  id: number;
  language: string;
  lyrics_owner_id: number;
  lyrics_placeholder_reason: any;
  lyrics_state: string;
  path: string;
  pyongs_count: any;
  recording_location: any;
  relationships_index_url: string;
  release_date: string;
  release_date_for_display: string;
  release_date_with_abbreviated_month_for_display: string;
  song_art_image_thumbnail_url: string;
  song_art_image_url: string;
  stats: IStats;
  title: string;
  title_with_featured: string;
  url: string;
  current_user_metadata: ICurrentUserMetadata;
  album: IAlbum;
  custom_performances: any[];
  description_annotation: IDescriptionAnnotation;
  featured_artists: IFeaturedArtist[];
  lyrics_marked_complete_by: any;
  lyrics_marked_staff_approved_by: any;
  media: IMedum[];
  primary_artist: IPrimaryArtist;
  producer_artists: IProducerArtist[];
  song_relationships: ISongRelationship[];
  translation_songs: any[];
  verified_annotations_by: any[];
  verified_contributors: any[];
  verified_lyrics_by: any[];
  writer_artists: IWriterArtist[];
}

interface IDescription {
  dom: IDom;
}

interface IDom {
  tag: string;
  children: IChildren[];
}

interface IChildren {
  tag: string;
  children: string[];
}

interface IStats {
  accepted_annotations: number;
  contributors: number;
  iq_earners: number;
  transcribers: number;
  unreviewed_annotations: number;
  verified_annotations: number;
  hot: boolean;
  pageviews: number;
}

interface ICurrentUserMetadata {
  permissions: string[];
  excluded_permissions: string[];
  interactions: IInteractions;
  relationships: IRelationships;
  iq_by_action: IIqByAction;
}

interface IInteractions {
  pyong: boolean;
  following: boolean;
}

interface IRelationships {}

interface IIqByAction {}

interface IAlbum {
  api_path: string;
  cover_art_url: string;
  full_title: string;
  id: number;
  name: string;
  release_date_for_display: string;
  url: string;
  artist: IArtist;
}

interface IArtist {
  api_path: string;
  header_image_url: string;
  id: number;
  image_url: string;
  is_meme_verified: boolean;
  is_verified: boolean;
  name: string;
  url: string;
  iq: number;
}

interface IDescriptionAnnotation {
  _type: string;
  annotator_id: number;
  annotator_login: string;
  api_path: string;
  classification: string;
  fragment: string;
  id: number;
  is_description: boolean;
  path: string;
  range: IRange;
  song_id: number;
  url: string;
  verified_annotator_ids: any[];
  annotatable: IAnnotatable;
  annotations: IAnnotation[];
}

interface IRange {
  content: string;
}

interface IAnnotatable {
  api_path: string;
  client_timestamps: IClientTimestamps;
  context: string;
  id: number;
  image_url: string;
  link_title: string;
  title: string;
  type: string;
  url: string;
}

interface IClientTimestamps {
  updated_by_human_at: number;
  lyrics_updated_at: number;
}

interface IAnnotation {
  api_path: string;
  body: IBody;
  comment_count: number;
  community: boolean;
  custom_preview: any;
  has_voters: boolean;
  id: number;
  pinned: boolean;
  share_url: string;
  source: any;
  state: string;
  url: string;
  verified: boolean;
  votes_total: number;
  current_user_metadata: ICurrentUserMetadata2;
  authors: IAuthor[];
  cosigned_by: any[];
  rejection_comment: any;
  verified_by: any;
}

interface IBody {
  dom: IDom2;
}

interface IDom2 {
  tag: string;
}

interface ICurrentUserMetadata2 {
  permissions: any[];
  excluded_permissions: string[];
  interactions: IInteractions2;
  iq_by_action: IIqByAction2;
}

interface IInteractions2 {
  cosign: boolean;
  pyong: boolean;
  vote: any;
}

interface IIqByAction2 {}

interface IAuthor {
  attribution: number;
  pinned_role: any;
  user: IUser;
}

interface IUser {
  api_path: string;
  avatar: IAvatar;
  header_image_url: string;
  human_readable_role_for_display: string;
  id: number;
  iq: number;
  login: string;
  name: string;
  role_for_display: string;
  url: string;
  current_user_metadata: ICurrentUserMetadata3;
}

interface IAvatar {
  tiny: ITiny;
  thumb: IThumb;
  small: ISmall;
  medium: IMedium;
}

interface ITiny {
  url: string;
  bounding_box: IBoundingBox;
}

interface IBoundingBox {
  width: number;
  height: number;
}

interface IThumb {
  url: string;
  bounding_box: IBoundingBox2;
}

interface IBoundingBox2 {
  width: number;
  height: number;
}

interface ISmall {
  url: string;
  bounding_box: IBoundingBox3;
}

interface IBoundingBox3 {
  width: number;
  height: number;
}

interface IMedium {
  url: string;
  bounding_box: IBoundingBox4;
}

interface IBoundingBox4 {
  width: number;
  height: number;
}

interface ICurrentUserMetadata3 {
  permissions: any[];
  excluded_permissions: string[];
  interactions: IInteractions3;
}

interface IInteractions3 {
  following: boolean;
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
}

interface IMedum {
  native_uri?: string;
  provider: string;
  type: string;
  url: string;
  start?: number;
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
  iq: number;
}

interface IProducerArtist {
  api_path: string;
  header_image_url: string;
  id: number;
  image_url: string;
  is_meme_verified: boolean;
  is_verified: boolean;
  name: string;
  url: string;
}

interface ISongRelationship {
  relationship_type: string;
  type: string;
  songs: any[];
}

interface IWriterArtist {
  api_path: string;
  header_image_url: string;
  id: number;
  image_url: string;
  is_meme_verified: boolean;
  is_verified: boolean;
  name: string;
  url: string;
}

export default ISongDTO;
