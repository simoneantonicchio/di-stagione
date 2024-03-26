import { Injectable, NotFoundException } from '@nestjs/common';
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
  getInfo(): any {
    return retrieveData('info.json');
  }

  getData(): any {
    return retrieveData('data.json');
  }
}
