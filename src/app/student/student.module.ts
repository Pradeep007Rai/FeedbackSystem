import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { QuestionComponent } from './studentComponents/question/question.component';
import { StudentComponent } from './student.component';
import { FormsModule } from '@angular/forms';
import { QuestionSectionComponent } from './studentComponents/question-section/question-section.component';
import { SectionsComponent } from './studentComponents/sections/sections.component';
import { MaterialModule } from '../material/material.module';
@NgModule({
  declarations: [QuestionComponent, StudentComponent, QuestionSectionComponent, SectionsComponent],
  imports: [
    MaterialModule,
    MaterialModule,
    FormsModule,
    CommonModule,
    StudentRoutingModule,
    FormsModule
  ]
})
export class StudentModule { }
