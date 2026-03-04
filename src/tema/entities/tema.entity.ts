import { Transform } from 'class-transformer';
import { IsInt, IsNotEmpty, IsOptional } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Postagem } from '../../postagem/entities/postagem.entity';

@Entity({ name: 'tb_temas' })
export class Tema {
  @IsOptional()
  @IsInt()
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ nullable: false, length: 255 })
  @Transform((param) => param.value.trim())
  descricao: string;

  @OneToMany(() => Postagem, (postagem) => postagem.tema)
  postagens: Postagem[];
}
