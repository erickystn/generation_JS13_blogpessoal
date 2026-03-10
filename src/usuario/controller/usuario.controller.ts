import { Controller, Get, Post, Body, Param, Put, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../entities/usuario.entity';


@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post('/cadastrar')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() usuario: Usuario) {
    console.log(usuario)
    return this.usuarioService.create(usuario);
  }

  @Get('/all')
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id',ParseIntPipe) id: number) {
    return this.usuarioService.findById(id);
  }

  @Put('/atualizar')
  @HttpCode(HttpStatus.OK)
  update( @Body() usuario: Usuario) {
    return this.usuarioService.update(usuario);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usuarioService.remove(+id);
  // }
}
