import {
  Controller,
  Get,
  // Post,
  // Body,
  // Patch,
  // Param,
  // Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { PostagemService } from '../services/postagem.service';
// import { CreatePostagemDto } from '../dto/create-postagem.dto';
// import { UpdatePostagemDto } from '../dto/update-postagem.dto';
import { Postagem } from '../entities/postagem.entity';

@Controller('postagens')
export class PostagemController {
  constructor(private readonly postagemService: PostagemService) {}

  // @Post()
  // create(@Body() createPostagemDto: CreatePostagemDto) {
  //   // return this.postagemService.create(createPostagemDto);
  // }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Postagem[]> {
    return this.postagemService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   // return this.postagemService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updatePostagemDto: UpdatePostagemDto,
  // ) {
  //   // return this.postagemService.update(+id, updatePostagemDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   // return this.postagemService.remove(+id);
  // }
}
