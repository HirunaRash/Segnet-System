import { prisma } from '@/infrastructure/db/prisma';
import { ICompanyRepository } from '@/domain/repositories/ICompanyRepository';

export const PrismaCompanyRepository: ICompanyRepository = {
  async create(data) {
    return prisma.company.create({ data });
  },
  async findByCode(companyCode) {
    return prisma.company.findFirst({ where: { CompanyCode: companyCode } });
  },
  async findById(id) {
    return prisma.company.findUnique({ where: { CompanyId: id } });
  },
  async update(id, data) {
    return prisma.company.update({ where: { CompanyId: id }, data });
  },
};