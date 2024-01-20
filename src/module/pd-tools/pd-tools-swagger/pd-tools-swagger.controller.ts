import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PdToolsSwaggerService } from './pd-tools-swagger.service';
import { CreatePdToolsSwaggerDto } from './dto/create-pd-tools-swagger.dto';
import { UpdatePdToolsSwaggerDto } from './dto/update-pd-tools-swagger.dto';

@Controller('pd-tools-swagger')
export class PdToolsSwaggerController {
  constructor(private readonly pdToolsSwaggerService: PdToolsSwaggerService) {}

  @Post()
  create(@Body() createPdToolsSwaggerDto: CreatePdToolsSwaggerDto) {
    return this.pdToolsSwaggerService.create(createPdToolsSwaggerDto);
  }

  @Get()
  findAll() {
    return this.pdToolsSwaggerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pdToolsSwaggerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePdToolsSwaggerDto: UpdatePdToolsSwaggerDto) {
    return this.pdToolsSwaggerService.update(+id, updatePdToolsSwaggerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pdToolsSwaggerService.remove(+id);
  }
}
