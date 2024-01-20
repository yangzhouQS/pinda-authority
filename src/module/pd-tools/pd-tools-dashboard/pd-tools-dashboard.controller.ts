import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PdToolsDashboardService } from './pd-tools-dashboard.service';
import { CreatePdToolsDashboardDto } from './dto/create-pd-tools-dashboard.dto';
import { UpdatePdToolsDashboardDto } from './dto/update-pd-tools-dashboard.dto';

@Controller('pd-tools-dashboard')
export class PdToolsDashboardController {
  constructor(private readonly pdToolsDashboardService: PdToolsDashboardService) {}

  @Post()
  create(@Body() createPdToolsDashboardDto: CreatePdToolsDashboardDto) {
    return this.pdToolsDashboardService.create(createPdToolsDashboardDto);
  }

  @Get()
  findAll() {
    return this.pdToolsDashboardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pdToolsDashboardService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePdToolsDashboardDto: UpdatePdToolsDashboardDto) {
    return this.pdToolsDashboardService.update(+id, updatePdToolsDashboardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pdToolsDashboardService.remove(+id);
  }
}
