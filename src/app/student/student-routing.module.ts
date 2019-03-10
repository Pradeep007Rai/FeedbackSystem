import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student.component';
import { QuestionComponent } from './studentComponents/question/question.component';

const routes: Routes = [
  {
    path: '',
    component : StudentComponent, 
    children: [
        { path: '',component: QuestionComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
