import { Postagem } from './../entities/postagem.entity';
import {
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { DeleteResult } from 'typeorm/browser';

@Injectable()
export class PostagemService {
  constructor(
    @InjectRepository(Postagem)
    private postagemRepository: Repository<Postagem>,
  ) {}

  async findAll(): Promise<Postagem[]> {
    return this.postagemRepository.find();
  }

  async findById(id: number): Promise<Postagem> {
    const postagem = await this.postagemRepository.findOneBy({ id });

    if (!postagem) {
      throw new HttpException('Postagem não encontrada', HttpStatus.NOT_FOUND);
    }
    return postagem;
  }

  async findAllByTitulo(titulo: string): Promise<Postagem[]> {
    return await this.postagemRepository.findBy({
      titulo: ILike(`%${titulo}%`),
    });
  }

  async create(postagem: Postagem): Promise<Postagem> {
    return await this.postagemRepository.save(postagem);
  }

  async update(postagem: Postagem): Promise<Postagem> {
    if (!postagem.id || postagem.id <= 0)
      throw new HttpException('ID inválido!', HttpStatus.BAD_GATEWAY);
    await this.findById(postagem.id);
    return await this.postagemRepository.save(postagem);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return await this.postagemRepository.delete({ id });
  }
}
