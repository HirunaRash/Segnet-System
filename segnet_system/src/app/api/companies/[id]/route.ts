import { NextRequest, NextResponse } from 'next/server';
import { registerCompany } from '@/use-cases/companies/RegisterCompany';
import { updateCompany } from '@/use-cases/companies/UpdateCompany';
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

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const company = await updateCompany(PrismaCompanyRepository, Number(id), body);
    return NextResponse.json(company, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 400 });
  }
}