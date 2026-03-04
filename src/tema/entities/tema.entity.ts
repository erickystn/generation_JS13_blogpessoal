import { Transform } from 'class-transformer';
import { IsInt, IsNotEmpty, IsOptional, Length } from 'class-validator';
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
  @Length(10, 255, {message: "O Texto deve ter entre 10 e 255 caracteres"})
  @Transform((param) => param.value.trim())
  descricao: string;
 
  @OneToMany(() => Postagem, (postagem) => postagem.tema)
  postagens: Postagem[];
}
