import { Component, OnInit } from '@angular/core';
import {HttpService} from '../services/http.service';

@Component({
  selector: 'app-http-tester',
  templateUrl: './http-tester.component.html',
  styleUrls: ['./http-tester.component.css']
})
export class HttpTesterComponent {

  constructor(private httpService: HttpService) { }

  getExercises() {
    this.httpService.getExercises().subscribe(exercises => {
      console.log(exercises);
    });
  }

  getExercisesByTargetMuscle(muscleName: string) {
    this.httpService.getExercisesByTargetMuscle(muscleName).subscribe(exercises => {
      console.log(exercises);
    });
  }

  getTrainingsByUser(idUser: number) {
    this.httpService.getTrainingsByUser(idUser).subscribe(exercises => {
      console.log(exercises);
    });
  }

}
