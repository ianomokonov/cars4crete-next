import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CarOrderEntity } from './car-order.entity';
import { PriceEntity } from './price.entity';

@Entity('car')
export class CarEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  img: string;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column('text', { name: 'description_eng' })
  descriptionEng: string;

  @Column('text', { name: 'description_de' })
  descriptionDe: string;

  @Column()
  fuelType: string;

  @Column()
  bodyType: string;

  @Column('float')
  engineVolum: number;

  @Column()
  enginPower: number;

  @Column('float')
  speed: number;

  @Column('float')
  time: number;

  @Column('float')
  consumption: number;

  @Column()
  kpp: string;

  @Column()
  driveUnit: string;

  @Column()
  places: number;

  @Column('float')
  backVolume: number;

  @Column()
  license: string;

  @Column()
  createYear: number;

  @Column()
  class: string;

  @Column()
  minAge: number;

  @Column()
  doors: number;

  @Column()
  abs: boolean;

  @Column()
  airBags: boolean;

  @OneToMany(() => PriceEntity, (price) => price.car)
  prices: PriceEntity[];

  @OneToMany(() => CarOrderEntity, (order) => order.car)
  orders: CarOrderEntity[];
}
