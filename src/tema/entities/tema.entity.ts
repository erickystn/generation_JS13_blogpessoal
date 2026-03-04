import { Transform } from 'class-transformer';
<<<<<<< HEAD
import { IsInt, IsNotEmpty, IsOptional, Length } from 'class-validator';
=======
import { IsInt, IsNotEmpty, IsOptional } from 'class-validator';
>>>>>>> a6c19835c5e829e44f318660da91af733e7b32f4
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
<<<<<<< HEAD
  @Length(10, 255, {message: "O Texto deve ter entre 10 e 255 caracteres"})
  @Transform((param) => param.value.trim())
  descricao: string;
 
=======
  @Transform((param) => param.value.trim())
  descricao: string;

>>>>>>> a6c19835c5e829e44f318660da91af733e7b32f4
  @OneToMany(() => Postagem, (postagem) => postagem.tema)
  postagens: Postagem[];
}
