interface IArtistDTO {
  meta: IMeta;
  response: IResponse;
}

interface IMeta {
  status: number;
}

interface IResponse {
  artist: IArtist;
}

interface IArtist {
  alternate_names: string[];
  api_path: string;
  description: IDescription;
  facebook_name: string;
  followers_count: number;
  header_image_url: string;
  id: number;
  image_url: string;
  instagram_name: string;
  is_meme_verified: boolean;
  is_verified: boolean;
  name: string;
  translation_artist: boolean;
  twitter_name: string;
  url: string;
  current_user_metadata: ICurrentUserMetadata;
  iq: number;
  description_annotation: IDescriptionAnnotation;
  user: IUser2;
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

interface ICurrentUserMetadata {
  permissions: string[];
  excluded_permissions: string[];
  interactions: IInteractions;
}

interface IInteractions {
  following: boolean;
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
  range: Range;
  song_id: any;
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
  context: any;
  id: number;
  image_url: string;
  link_title: string;
  title: string;
  type: string;
  url: string;
}

interface IAnnotation {
  api_path: string;
  body: Body;
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
  children: IChildren2[];
}

interface IChildren2 {
  tag: string;
  children: string[];
}

interface ICurrentUserMetadata2 {
  permissions: any[];
  excluded_permissions: string[];
  interactions: IInteractions2;
  iq_by_action: IIqByAction;
}

interface IInteractions2 {
  cosign: boolean;
  pyong: boolean;
  vote: any;
}

interface IIqByAction {}

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

interface IUser2 {
  api_path: string;
  avatar: IAvatar2;
  header_image_url: string;
  human_readable_role_for_display: string;
  id: number;
  iq: number;
  login: string;
  name: string;
  role_for_display: string;
  url: string;
  current_user_metadata: ICurrentUserMetadata4;
}

interface IAvatar2 {
  tiny: ITiny2;
  thumb: IThumb2;
  small: ISmall2;
  medium: IMedium2;
}

interface ITiny2 {
  url: string;
  bounding_box: IBoundingBox5;
}

interface IBoundingBox5 {
  width: number;
  height: number;
}

interface IThumb2 {
  url: string;
  bounding_box: IBoundingBox6;
}

interface IBoundingBox6 {
  width: number;
  height: number;
}

interface ISmall2 {
  url: string;
  bounding_box: IBoundingBox7;
}

interface IBoundingBox7 {
  width: number;
  height: number;
}

interface IMedium2 {
  url: string;
  bounding_box: IBoundingBox8;
}

interface IBoundingBox8 {
  width: number;
  height: number;
}

interface ICurrentUserMetadata4 {
  permissions: any[];
  excluded_permissions: string[];
  interactions: IInteractions4;
}

interface IInteractions4 {
  following: boolean;
}

export default IArtistDTO;
