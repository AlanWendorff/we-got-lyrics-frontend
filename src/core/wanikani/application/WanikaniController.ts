import { IWanikaniRepository } from '../domain/repositories/WanikaniRepository';
import { wanikaniService } from '../domain/services/WanikaniService';

export const wanikaniController = (repository: IWanikaniRepository) => ({
    getAllSubjects: () => {
        return wanikaniService(repository).getAllSubjects();
    },
    getUser: () => {
        return wanikaniService(repository).getUser();
    },
    getSubjectsByUser: () => {
        return wanikaniService(repository).getSubjectsByUser();
    }
});
