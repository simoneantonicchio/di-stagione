import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleModule } from '@nestjs/schedule';
import { CronjobsModule } from './cronjobs/cronjobs.module';

@Module({
  imports: [], //[ScheduleModule.forRoot(), CronjobsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
