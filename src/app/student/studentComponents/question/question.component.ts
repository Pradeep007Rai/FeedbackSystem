import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuestionModule } from 'src/app/core/modules/question.model';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit {
  questionModel: QuestionModule;
  @Input() question: QuestionModule;
  @Output() answered: EventEmitter<number> = new EventEmitter<number>();
  audio: any;

  ngOnInit() {
    this.questionModel = this.question;
    this.question.answer = 0;
  }

  onAnswer(): void {
    this.answered.emit(this.question.answer);
  }

  onClick(): void {
    this.answered.emit(this.question.answer);
    this.audio = new Audio('assets/sounds/tickel.wav');
    this.audio.volume = this.question.answer / 5;
    this.audio.play();
  }

}