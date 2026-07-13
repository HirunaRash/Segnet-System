import { Department } from '@/domain/entities/Department';

export interface IDepartmentRepository {
  create(data: Omit<Department, 'DepartmentId'>): Promise<Department>;
  findByCode(departmentCode: string, companyId: number): Promise<Department | null>;
  findByCompanyId(companyId: number): Promise<Department | null>;
}