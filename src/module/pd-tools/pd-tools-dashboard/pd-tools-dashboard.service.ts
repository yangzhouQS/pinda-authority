import { Injectable } from '@nestjs/common';
import { CreatePdToolsDashboardDto } from './dto/create-pd-tools-dashboard.dto';
import { UpdatePdToolsDashboardDto } from './dto/update-pd-tools-dashboard.dto';

@Injectable()
export class PdToolsDashboardService {
  create(createPdToolsDashboardDto: CreatePdToolsDashboardDto) {
    return 'This action adds a new pdToolsDashboard';
  }

  findAll() {
    return `This action returns all pdToolsDashboard`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pdToolsDashboard`;
  }

  update(id: number, updatePdToolsDashboardDto: UpdatePdToolsDashboardDto) {
    return `This action updates a #${id} pdToolsDashboard`;
  }

  remove(id: number) {
    return `This action removes a #${id} pdToolsDashboard`;
  }
}
