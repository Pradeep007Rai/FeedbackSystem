import { ClassDetail } from './class.model.';

export interface StudentDetail {
    rollNo: number;
    name: string;
    gender: string;
    dob: Date;
    contactNo: string;
    address: string;
    class?:ClassDetail;
  }