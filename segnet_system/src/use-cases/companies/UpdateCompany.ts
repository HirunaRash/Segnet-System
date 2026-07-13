import { ICompanyRepository } from '@/domain/repositories/ICompanyRepository';
import { Company } from '@/domain/entities/Company';

type UpdateCompanyInput = Partial<Omit<Company, 'CompanyId'>>;

export async function updateCompany(
  repo: ICompanyRepository,
  id: number,
  input: UpdateCompanyInput
) {
  const existing = await repo.findById(id);
  if (!existing) {
    throw new Error('Company not found');
  }
  return repo.update(id, input);
}