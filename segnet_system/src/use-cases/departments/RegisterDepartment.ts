import { IDepartmentRepository } from '@/domain/repositories/IDepartmentRepository';
import { ICompanyRepository } from '@/domain/repositories/ICompanyRepository';
import { Department } from '@/domain/entities/Department';

type RegisterDepartmentInput = Omit<Department, 'DepartmentId'>;

export async function registerDepartment(
  deptRepo: IDepartmentRepository,
  companyRepo: ICompanyRepository,
  input: RegisterDepartmentInput
) {
  if (!input.DepartmentCode?.trim()) {
    throw new Error('Department code is required');
  }
  if (!input.DepartmentName?.trim()) {
    throw new Error('Department name is required');
  }
  if (!input.CompanyId) {
    throw new Error('Company ID is required');
  }

  const company = await companyRepo.findById(input.CompanyId);
  if (!company) {
    throw new Error('Company not found');
  }

  return deptRepo.create(input);
}