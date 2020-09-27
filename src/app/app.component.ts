import { Component } from '@angular/core';
import { QuizService } from './service/quiz-service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(public QuizService: QuizService){
    this.current = QuizService.quizes.items[QuizService.quizes.activQuiz];
    this.service = QuizService;
  }
  service
  current 

  title = 'test';
  answer(index){
    this.service.checkAnswer(index)
  }
  goRestart(){
    this.service.restart();
  }
}
