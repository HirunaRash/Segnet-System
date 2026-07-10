export interface Company {
  CompanyId: number;
  CompanyName: string;
  CompanyCode: string;
  IsActive: boolean | null;
  ContactPerson: string | null;
  CompanyEmail: string | null;
  CompanyPhone: string | null;
  CompanyAddress: string | null;
  CreatedAt: Date | null;
  CreatedBy: number | null;
  UpdateAt: Date | null;
  UpdateBy: number | null;
}