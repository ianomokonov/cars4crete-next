import { Module } from '@nestjs/common';
import { PlaceController } from './place.controller';
import { PlaceService } from './place.service';

@Module({
  providers: [PlaceService],
  controllers: [PlaceController],
})
export class PlaceModule {}
