import { prisma } from '@/infrastructure/db/prisma';
import { IDepartmentRepository } from '@/domain/repositories/IDepartmentRepository';

export const PrismaDepartmentRepository: IDepartmentRepository = {
  async create(data) {
    return prisma.departments.create({ data });
  },
  async findByCode(departmentCode, companyId) {
    return prisma.departments.findFirst({ where: { DepartmentCode: departmentCode, CompanyId: companyId } });
  },
  async findByCompanyId(companyId) {
    return prisma.departments.findFirst({ where: { CompanyId: companyId } });
  },
};