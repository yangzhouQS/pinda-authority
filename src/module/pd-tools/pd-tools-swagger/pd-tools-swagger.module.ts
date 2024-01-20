import { Module } from '@nestjs/common';
import { PdToolsSwaggerService } from './pd-tools-swagger.service';
import { PdToolsSwaggerController } from './pd-tools-swagger.controller';

@Module({
  controllers: [PdToolsSwaggerController],
  providers: [PdToolsSwaggerService],
})
export class PdToolsSwaggerModule {}
