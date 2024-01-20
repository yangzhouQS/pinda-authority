import { PartialType } from '@nestjs/mapped-types';
import { CreatePdToolsSwaggerDto } from './create-pd-tools-swagger.dto';

export class UpdatePdToolsSwaggerDto extends PartialType(CreatePdToolsSwaggerDto) {}
