import { ICompanyRepository } from '@/domain/repositories/ICompanyRepository';
import { Company } from '@/domain/entities/Company';

type RegisterCompanyInput = Omit<Company, 'CompanyId'>;

export async function registerCompany(
  repo: ICompanyRepository,
  input: RegisterCompanyInput
) {
  if (!input.CompanyCode?.trim()) {
    throw new Error('Company code is required');
  }
  if (!input.CompanyName?.trim()) {
    throw new Error('Company name is required');
  }

  const existing = await repo.findByCode(input.CompanyCode);
  if (existing) {
    throw new Error('Company code already exists');
  }

  return repo.create(input);
}