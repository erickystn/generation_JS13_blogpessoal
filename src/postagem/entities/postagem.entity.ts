import { Transform, TransformFnParams } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'tb_postagens' })
export class Postagem {
  @IsNumber() // <--- ADICIONE ISSO
  @IsOptional()
  @PrimaryGeneratedColumn()
  id: number;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty()
  @Column({ nullable: false, length: 100 })
  titulo: string;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty()
  @Column({ nullable: false, length: 1000 })
  texto: string;

  @UpdateDateColumn()
  data: Date;
}
