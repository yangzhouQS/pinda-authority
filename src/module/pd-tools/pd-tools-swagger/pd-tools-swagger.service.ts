import { Injectable } from '@nestjs/common';
import { CreatePdToolsSwaggerDto } from './dto/create-pd-tools-swagger.dto';
import { UpdatePdToolsSwaggerDto } from './dto/update-pd-tools-swagger.dto';

@Injectable()
export class PdToolsSwaggerService {
  create(createPdToolsSwaggerDto: CreatePdToolsSwaggerDto) {
    return 'This action adds a new pdToolsSwagger';
  }

  findAll() {
    return `This action returns all pdToolsSwagger`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pdToolsSwagger`;
  }

  update(id: number, updatePdToolsSwaggerDto: UpdatePdToolsSwaggerDto) {
    return `This action updates a #${id} pdToolsSwagger`;
  }

  remove(id: number) {
    return `This action removes a #${id} pdToolsSwagger`;
  }
}
