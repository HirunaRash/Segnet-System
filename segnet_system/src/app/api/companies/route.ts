import { NextRequest, NextResponse } from 'next/server';
import { registerCompany } from '@/use-cases/companies/RegisterCompany';
import { PrismaCompanyRepository } from '@/infrastructure/repositories/PrismaCompanyRepository';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const company = await registerCompany(PrismaCompanyRepository, body);
    return NextResponse.json(company, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 400 });
  }
}