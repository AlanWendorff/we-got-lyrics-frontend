export interface SubjectsDTO {
  object: string;
  url: string;
  pages: Pages;
  total_count: number;
  data_updated_at: string;
  data: SubjectDTO[];
}

export interface Pages {
  per_page: number;
  next_url: string;
  previous_url: any;
}

export interface SubjectDTO {
  id: number;
  object: string;
  url: string;
  data_updated_at: string;
  data: Data;
}

export interface Data {
  created_at: string;
  level: number;
  slug: string;
  hidden_at: any;
  document_url: string;
  characters: string;
  character_images: CharacterImage[];
  meanings: Meaning[];
  auxiliary_meanings: any[];
  amalgamation_subject_ids: number[];
  meaning_mnemonic: string;
  lesson_position: number;
  spaced_repetition_system_id: number;
}

export interface CharacterImage {
  url: string;
  metadata: Metadata;
  content_type: string;
}

export interface Metadata {
  inline_styles?: boolean;
  color?: string;
  dimensions?: string;
  style_name?: string;
}

export interface Meaning {
  meaning: string;
  primary: boolean;
  accepted_answer: boolean;
}
