import { http } from '../../../configuration/http/Http';
import { IWanikaniRepository } from '../../domain/repositories/WanikaniRepository';
import { SubjectDTO, SubjectsDTO } from '../../../configuration/http/dto/SubjectDTO';
import { UserDTO } from '../../../configuration/http/dto/UserDTO';
import { subjectMapper } from '../mappers/subject.mapper';
import { userMapper } from '../mappers/user.mapper';

const BASE_URL = process.env.WANIKANI_API_URL;

export const wanikaniRepository = (): IWanikaniRepository => ({
    getAllSubjects: async () => {
        try {
            let next_url = `${BASE_URL}/subjects`;
            let subjectsCollection: SubjectDTO[] = [];

            do {
                const subjects = await http.get<SubjectsDTO>(next_url);
                subjectsCollection = [...subjectsCollection, ...subjects.data];
                next_url = subjects.pages.next_url;
            } while (next_url !== null);

            return subjectsCollection.map((subjectDTO: SubjectDTO) => subjectMapper(subjectDTO));
        } catch (error) {
            throw new Error(`Error getting subjects: ${error}`);
        }
    },
    getUser: async () => {
        try {
            const user = await http.get<UserDTO>(`${BASE_URL}/user`);
            return userMapper(user);
        } catch (error) {
            throw new Error(`Error getting user: ${error}`);
        }
    }
});
