import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Exercise} from '../models/exercise';
import {Observable} from 'rxjs';
import {Training} from '../models/training';
import {ChartPoint} from '../models/chart-point';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  URL = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {
  }

  getExercises(): Observable<Array<Exercise>> {
    return this.http.get<Array<Exercise>>(this.URL + 'exercise');
  }

  getExercisesByTargetMuscle(muscleName: string): Observable<Array<Exercise>> {
    return this.http.get<Array<Exercise>>(this.URL + 'exercises/' + muscleName);
  }

  getTrainingsByUser(idUser: number): Observable<Array<Training>> {
    return this.http.get<Array<Training>>(this.URL + 'user/' + idUser + '/training');
  }

  getChartPoints(idUser: number, exerciseName: string): Observable<Array<ChartPoint>> {
    return this.http.get<Array<ChartPoint>>(this.URL + 'user/' + idUser + '/progress?exerciseName=' + exerciseName);
  }

  getUserByLoginAndPassword(login: string, password: string): Observable<User> {
    return this.http.get<User>(this.URL + 'user?login=' + login + '&password=' + password);
  }
}