import { Injectable, NotFoundException } from '@nestjs/common';
import { readFileSync } from 'fs';

@Injectable()
export class AppService {
  getInfo(): any {
    try {
      const data = readFileSync('./src/data/info.json', 'utf8');
      return JSON.parse(data);
    } catch (error) {
      throw new NotFoundException(`${error}`);
    }
  }
}
