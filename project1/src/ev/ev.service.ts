import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EvService {
  constructor(private configerService: ConfigService) {}

  getDBUrl() {
    return this.configerService.get<string>('URL');
  }
}
