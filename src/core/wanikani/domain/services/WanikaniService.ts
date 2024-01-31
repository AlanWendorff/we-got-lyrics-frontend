import { TSubject } from '../models/Subject';
import { TUser } from '../models/User';
import { IWanikaniRepository } from '../repositories/WanikaniRepository';

export interface IWanikaniService {
  getAllSubjects: () => Promise<TSubject[]>;
  getUser: () => Promise<TUser>;
  getSubjectsByUser: () => Promise<TSubject[]>;
}

export const wanikaniService = (repository: IWanikaniRepository): IWanikaniService => ({
  getAllSubjects: () => {
    return repository.getAllSubjects();
  },
  getUser: () => {
    return repository.getUser();
  },
  getSubjectsByUser: async () => {
    const user = await repository.getUser();
    const subjects = await repository.getAllSubjects();
    return subjects.filter((s) => s.level <= user.level);
  }
});
