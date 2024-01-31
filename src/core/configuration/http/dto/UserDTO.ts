export interface UserDTO {
  object: string;
  url: string;
  data_updated_at: string;
  data: Data;
}

export interface Data {
  id: string;
  username: string;
  level: number;
  profile_url: string;
  started_at: string;
  subscription: Subscription;
  current_vacation_started_at: any;
  preferences: Preferences;
}

export interface Subscription {
  active: boolean;
  type: string;
  max_level_granted: number;
  period_ends_at: any;
}

export interface Preferences {
  lessons_batch_size: number;
  default_voice_actor_id: number;
  lessons_autoplay_audio: boolean;
  reviews_autoplay_audio: boolean;
  extra_study_autoplay_audio: boolean;
  lessons_presentation_order: string;
  reviews_presentation_order: string;
  reviews_display_srs_indicator: boolean;
}
