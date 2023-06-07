import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios'
import { TrackModule } from './domains/track/track.module';
import configuration from './config/configuration';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      load: [configuration], 
    }),
    TrackModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
