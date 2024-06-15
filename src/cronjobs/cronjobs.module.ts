import { Module } from '@nestjs/common';
import { CronjobsService } from './cronjobs.service';
import { AppService } from 'src/app.service';

@Module({
  providers: [CronjobsService, AppService]
})
export class CronjobsModule {}
