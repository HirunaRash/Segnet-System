export interface Department {
  DepartmentId: number;
  DepartmentName: string;
  DepartmentCode: string;
  IsActive: boolean | null;
  CompanyId: number | null;
  CreatedAt: Date | null;
  CreatedBy: number | null;
  UpdateAt: Date | null;
  UpdateBy: number | null;
}