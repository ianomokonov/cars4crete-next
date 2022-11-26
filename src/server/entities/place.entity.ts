import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('place')
export class PlaceEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: 'name_eng' })
  nameEng: string;

  @Column({ name: 'name_de' })
  nameDe: string;
}
