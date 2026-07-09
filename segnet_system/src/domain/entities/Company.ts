export interface Company {
  companyId: number;
  companyCode: string;
  companyName: string;
  contactPerson: string | null;
  email: string | null;
  address: string | null;
  phone: string | null;
  isActive: boolean;
}