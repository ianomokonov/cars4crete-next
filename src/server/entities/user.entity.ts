import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CarOrderEntity } from './car-order.entity';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  middleName: string;

  @Column({ default: false })
  isAdmin: boolean;

  @Column()
  email: string;

  @Column()
  phone: string;

  @OneToMany(() => CarOrderEntity, (order) => order.user)
  orders: CarOrderEntity[];
}
