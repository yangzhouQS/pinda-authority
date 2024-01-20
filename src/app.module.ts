import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PdToolsModule } from './module/pd-tools/pd-tools.module';
import { PdParentModule } from './module/pd-parent/pd-parent/pd-parent.module';
import { PdAppsModule } from './module/pd-apps/pd-apps/pd-apps.module';

@Module({
  imports: [ PdToolsModule, PdParentModule, PdAppsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
