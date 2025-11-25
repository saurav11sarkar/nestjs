import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { ERole } from './role.enums';
import { ROLE_KEY } from './role.decorator';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requriedRoles = this.reflector.getAllAndOverride<ERole[]>(ROLE_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requriedRoles) return true;
    const request = context
      .switchToHttp()
      .getRequest<{ headers: Record<string, string> }>();

    const user = request.headers['x-user-role'] as ERole;
    return requriedRoles.includes(user);
  }
}
