import { Company } from '@/domain/entities/Company';

export interface ICompanyRepository {
  create(data: Omit<Company, 'companyId'>): Promise<Company>;
  findByCode(companyCode: string): Promise<Company | null>;
}