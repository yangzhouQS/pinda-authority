import { Module } from '@nestjs/common';
import { PdToolsDashboardService } from './pd-tools-dashboard.service';
import { PdToolsDashboardController } from './pd-tools-dashboard.controller';

@Module({
  controllers: [PdToolsDashboardController],
  providers: [PdToolsDashboardService],
})
export class PdToolsDashboardModule {}
