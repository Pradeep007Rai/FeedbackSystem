import { QuestionModule } from './question.model';

export interface SectionModule {
  sectionId: number;
  sectionName: string;
  questions: QuestionModule[];
}