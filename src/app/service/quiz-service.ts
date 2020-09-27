import {Injectable} from '@angular/core'

@Injectable({providedIn: 'root'})

export class QuizService{
    quizes = {
        activQuiz: 0,
        currentPoints: 0,
        items: [
            {
                Questions: 'Какого цвета небо?',
                correct: 0,
                Answers: ['Синего', 'Зеленого', 'Оранжевого', 'Желтого'],
                Points: 20
            },
            {
                Questions: 'В каком году основали СПБ?',
                correct: 3,
                Points: 35,
                Answers: ['1790', '1765', '1705', '1703']
            },
            {
                Questions: 'Имя одного из основателей Apple?',
                correct: 3,
                Points: 45,
                Answers: ['Джесси Айзенберг', 'Тим Кук', 'Форест Гамп', 'Стив Возняк']
            },
        ]
    }
    checkAnswer(answer){
        let quiz = this.quizes;
        if(quiz.items[quiz.activQuiz].correct == answer){
            this.quizes.currentPoints+= quiz.items[quiz.activQuiz].Points;
        }
        this.quizes.activQuiz++;
    }
    getCurrent(){
        let quiz = this.quizes;
        return quiz.items[quiz.activQuiz]
    }
    restart(){
        this.quizes.activQuiz = this.quizes.currentPoints = 0;
    }
}