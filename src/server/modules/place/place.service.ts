import { Injectable } from '@nestjs/common';
import { PlaceEntity } from 'src/server/entities/place.entity';
import { PlaceDto } from 'src/shared/dtos/place/place.dto';

@Injectable()
export class PlaceService {
  public async getList(): Promise<PlaceDto[]> {
    return (await PlaceEntity.find()).map((place) => this.mapToDto(place));
  }

  private mapToDto(source: PlaceEntity): PlaceDto {
    return {
      id: source.id,
      name: {
        ru: source.name,
        eng: source.nameEng,
        de: source.nameDe,
      },
    };
  }
}
