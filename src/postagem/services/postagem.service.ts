import { Injectable } from '@nestjs/common';
// import { CreatePostagemDto } from './dto/create-postagem.dto';
// import { UpdatePostagemDto } from './dto/update-postagem.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Postagem } from '../entities/postagem.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostagemService {
  constructor(
    @InjectRepository(Postagem)
    private postagemRepository: Repository<Postagem>,
  ) {}
  async findAll(): Promise<Postagem[]> {
    console.log('Chegou');
    return this.postagemRepository.find();
  }
  // create(createPostagemDto: CreatePostagemDto) {
  //   return 'This action adds a new postagem';
  // }

  // findAll() {
  //   return `This action returns all postagem`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} postagem`;
  // }

  // update(id: number, updatePostagemDto: UpdatePostagemDto) {
  //   return `This action updates a #${id} postagem`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} postagem`;
  // }
}
