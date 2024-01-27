import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ninjas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, nullable: true })
  name: string;

  @Column({ length: 255, nullable: true })
  weapon: string;
}