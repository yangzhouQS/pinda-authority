import {
  BeforeApplicationShutdown,
  Module,
  OnApplicationShutdown,
} from '@nestjs/common';
import { PdToolsSwaggerService } from './pd-tools-swagger.service';
import { PdToolsSwaggerController } from './pd-tools-swagger.controller';

@Module({
  controllers: [PdToolsSwaggerController],
  providers: [PdToolsSwaggerService],
})
export class PdToolsSwaggerModule
  implements OnApplicationShutdown, BeforeApplicationShutdown
{
  beforeApplicationShutdown(signal?: string) {
    console.log('beforeApplicationShutdown ' + signal);
  }
  onApplicationShutdown(signal?: string) {
    console.log('onApplicationShutdown ' + signal);
  }
}
