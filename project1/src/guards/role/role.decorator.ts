import { SetMetadata } from '@nestjs/common';

export const ROLE_KEY = 'roles';
export const Roles = (...roles: string[]) => {
  return SetMetadata(ROLE_KEY, roles);
};
