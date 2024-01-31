export type TSubject = {
  id: number;
  object: string;
  url: string;
  level: number;
  slug: string;
  characters: string;
  character_images: TCharacterImage[];
};

export type TCharacterImage = {
  url: string;
  content_type: string;
};
