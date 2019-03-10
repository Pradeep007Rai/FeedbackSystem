import { Component, OnInit, Input } from '@angular/core';
import { QuestionModule } from 'src/app/core/modules/question.model';
import { SectionModule } from 'src/app/core/modules/section.model';

@Component({
  selector: 'app-question-section',
  templateUrl: './question-section.component.html',
  styleUrls: ['./question-section.component.css']
})
export class QuestionSectionComponent implements OnInit {

  header: string;
  questionModel: QuestionModule[];
  error: any;
  msg: any;
  @Input() section: SectionModule;

  ngOnInit() {
    this.header = 'Here comes the Header';
  }
  constructor() { }
}