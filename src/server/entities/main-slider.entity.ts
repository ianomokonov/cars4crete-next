import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('mainslide')
export class MainSlideEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  img: string;

  @Column()
  title: string;

  @Column({ name: 'title_eng' })
  titleEng: string;

  @Column({ name: 'title_de' })
  titleDe: string;

  @Column('text')
  description: string;

  @Column('text', { name: 'description_eng' })
  descriptionEng: string;

  @Column('text', { name: 'description_de' })
  descriptionDe: string;
}
