import { Controller, Get } from '@nestjs/common';
import { PlaceDto } from 'src/shared/dtos/place/place.dto';
import { PlaceService } from './place.service';

@Controller('/api/place')
export class PlaceController {
  constructor(private placeService: PlaceService) {}

  @Get()
  async getList(): Promise<PlaceDto[]> {
    return await this.placeService.getList();
  }
}
