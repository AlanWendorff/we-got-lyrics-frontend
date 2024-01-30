import { TSubject } from '../../domain/models/Subject';
import { SubjectDTO } from '../../../configuration/http/dto/SubjectDTO';

export const subjectMapper = (subjectDTO: SubjectDTO): TSubject => {
    return {
        id: subjectDTO.id,
        object: subjectDTO.object,
        url: subjectDTO.url,
        level: subjectDTO.data.level,
        slug: subjectDTO.data.slug,
        characters: subjectDTO.data.characters,
        character_images: subjectDTO.data.character_images ?? []
    };
};
