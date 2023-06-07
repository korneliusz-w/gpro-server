import { Module } from '@nestjs/common';
import { TracksController } from './controllers/track.controller';
import { TrackApiService } from './api/track.api.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [TracksController],
  providers: [TrackApiService]
})
export class TrackModule {}