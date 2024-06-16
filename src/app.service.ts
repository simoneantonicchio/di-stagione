import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { readFileSync } from 'fs';

function retrieveData(filename: string) {
  let filePath: string = './src/data/';
  try {
    const data = readFileSync(`${filePath}${filename}`, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    throw new NotFoundException(`${error}`);
  }
}

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  getInfo(): any {
    this.logger.debug('reads json file');
    return retrieveData('info.json');
  }

  getData(): any {
    return retrieveData('data.json');
  }
}
