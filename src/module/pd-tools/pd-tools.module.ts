import { Module } from '@nestjs/common';
import { PdToolsSwaggerModule } from './pd-tools-swagger/pd-tools-swagger.module';
import { RouterModule } from '@nestjs/core';

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
            module: PdToolsSwaggerModule,
          },
        ],
      },
    ]),
  ],
})
export class PdToolsModule {}
