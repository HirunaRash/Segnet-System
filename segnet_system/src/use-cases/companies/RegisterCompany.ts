import { ICompanyRepository } from '@/domain/repositories/ICompanyRepository';
import { Company } from '@/domain/entities/Company';

type RegisterCompanyInput = Omit<Company, 'companyId'>;

export async function registerCompany(
  repo: ICompanyRepository,
  input: RegisterCompanyInput
) {
  if (!input.companyCode?.trim()) {
    throw new Error('Company code is required');
  }
  if (!input.companyName?.trim()) {
    throw new Error('Company name is required');
  }

  const existing = await repo.findByCode(input.companyCode);
  if (existing) {
    throw new Error('Company code already exists');
  }

  return repo.create(input);
}