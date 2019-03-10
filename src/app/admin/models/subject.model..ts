import {  ClassDetail } from './class.model.';

export interface SubjectDeatil {
    id: number;
    name: string;
    class?:ClassDetail[];
  }