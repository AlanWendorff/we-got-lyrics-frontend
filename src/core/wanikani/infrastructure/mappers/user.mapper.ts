import { TUser } from '../../domain/models/User';
import { UserDTO } from '../../../configuration/http/dto/UserDTO';

export const userMapper = (userDTO: UserDTO): TUser => ({
  username: userDTO.data.username,
  level: userDTO.data.level
});
