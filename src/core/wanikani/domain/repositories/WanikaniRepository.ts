import { TSubject } from '../models/Subject';
import { TUser } from '../models/User';

export interface IWanikaniRepository {
  getAllSubjects: () => Promise<TSubject[]>;
  getUser: () => Promise<TUser>;
}
