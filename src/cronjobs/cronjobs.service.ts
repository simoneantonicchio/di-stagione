import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { AppService } from 'src/app.service';

@Injectable()
export class CronjobsService {
  constructor(private readonly appService: AppService) {}
  private readonly logger = new Logger(CronjobsService.name);

  // forces a getInfo call every 14 minutes between 7am and midnight (local time)
  @Cron('0 */14 7-23 * * *', {
    timeZone: 'Europe/Rome',
  })
  forceGetInfoCall() {
    this.logger.debug('called forceGetInfoCall()');
    this.appService.getInfo();
  }
}
