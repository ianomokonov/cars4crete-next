import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CarEntity } from './car.entity';

@Entity('price')
export class PriceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('float')
  price: number;

  @Column()
  daysCount: number;

  @Column()
  isWinter: boolean;

  @ManyToOne(() => CarEntity, (car) => car.prices)
  car: CarEntity;
}
