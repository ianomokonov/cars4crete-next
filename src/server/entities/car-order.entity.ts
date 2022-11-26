import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CarEntity } from './car.entity';
import { PlaceEntity } from './place.entity';
import { UserEntity } from './user.entity';

@Entity('carorder')
export class CarOrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dateFrom: Date;

  @Column()
  dateTo: Date;

  @Column()
  isCarFree: boolean;

  @Column()
  status: number;

  @Column()
  orderSum: number;

  @ManyToOne(() => CarEntity, (car) => car.orders)
  car: CarEntity;

  @ManyToOne(() => UserEntity, (user) => user.orders)
  user: UserEntity;

  @ManyToOne(() => PlaceEntity)
  placeFrom: PlaceEntity;

  @ManyToOne(() => PlaceEntity)
  placeTo: PlaceEntity;
}
