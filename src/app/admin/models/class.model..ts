import { SubjectDeatil } from './subject.model.';

export interface ClassDetail {
  id: number;
  name: string;
  subjects?: SubjectDeatil[];
  isActive?:boolean;
  }