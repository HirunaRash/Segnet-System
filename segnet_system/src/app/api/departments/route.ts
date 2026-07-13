import { NextRequest, NextResponse } from 'next/server';
import { registerDepartment } from '@/use-cases/departments/RegisterDepartment';
import { PrismaDepartmentRepository } from '@/infrastructure/repositories/PrismaDepartmentRepository';
import { PrismaCompanyRepository } from '@/infrastructure/repositories/PrismaCompanyRepository';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const department = await registerDepartment(PrismaDepartmentRepository, PrismaCompanyRepository, body);
    return NextResponse.json(department, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 400 });
  }
}