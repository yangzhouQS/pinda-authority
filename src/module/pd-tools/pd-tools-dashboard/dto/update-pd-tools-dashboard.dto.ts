import { PartialType } from '@nestjs/mapped-types';
import { CreatePdToolsDashboardDto } from './create-pd-tools-dashboard.dto';

export class UpdatePdToolsDashboardDto extends PartialType(CreatePdToolsDashboardDto) {}
