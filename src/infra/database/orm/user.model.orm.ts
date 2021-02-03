import { PrimaryColumn } from 'typeorm';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserModelOrm {
//   @PrimaryGeneratedColumn()
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({nullable: true })
  created_at: string;

  @Column({nullable: true })
  deleted_at: string;
}
