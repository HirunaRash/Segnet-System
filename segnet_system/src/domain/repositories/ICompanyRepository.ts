

import { Company } from '@/domain/entities/Company';

export interface ICompanyRepository {
  create(data: Omit<Company, 'CompanyId'>): Promise<Company>;
  findByCode(companyCode: string): Promise<Company | null>;
}