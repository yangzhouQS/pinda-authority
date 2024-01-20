import { Module } from '@nestjs/common';
import { PdToolsSwaggerModule } from './pd-tools-swagger/pd-tools-swagger.module';
import { RouterModule } from '@nestjs/core';
import { PdToolsDashboardModule } from './pd-tools-dashboard/pd-tools-dashboard.module';

@Module({
  imports: [
    PdToolsSwaggerModule,
    RouterModule.register([
      {
        path: 'swagger',
        module: PdToolsSwaggerModule,
        children: [
          {
            path: 'dashboard',
            module: PdToolsDashboardModule,
          },
        ],
      },
    ]),
  ],
})
export class PdToolsModule {}
