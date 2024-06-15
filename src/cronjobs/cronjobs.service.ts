import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class CronjobsService {
  constructor(private readonly httpService: HttpService) {}
  private readonly logger = new Logger(CronjobsService.name);

  // forces a getInfo call every 14 minutes between 7am and midnight (local time)
  @Cron('0 */14 7-23 * * *', {
    timeZone: 'Europe/Rome',
  })
  forceGetInfoCall() {
    this.logger.debug('called forceGetInfoCall()');
    this.httpService.get('https://distagione.onrender.com/info');
  }
}
