

import { Company } from '@/domain/entities/Company';

export interface ICompanyRepository {
  create(data: Omit<Company, 'CompanyId'>): Promise<Company>;
  findByCode(companyCode: string): Promise<Company | null>;
}

export interface ICompanyRepository {
  create(data: Omit<Company, 'CompanyId'>): Promise<Company>;
  findByCode(companyCode: string): Promise<Company | null>;
  findById(id: number): Promise<Company | null>;
  update(id: number, data: Partial<Omit<Company, 'CompanyId'>>): Promise<Company>;
}