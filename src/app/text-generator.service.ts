import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Responses {
  genders: { [key: string]: string };
  relationships: { [key: string]: string };
  numbers: { low: string; high: string };
}

@Injectable({
  providedIn: 'root'
})
export class TextGeneratorService {

  private responses$: Observable<Responses>;

  constructor(private http: HttpClient) {
    this.responses$ = this.http.get<Responses>('assets/responses.json');
  }

  generateText(gender: string | null, relationship: string | null, number: number | null): Observable<string> {
    return new Observable<string>(observer => {
      this.responses$.subscribe(responses => {
        if (!gender || !relationship || !number) {
          observer.next('Please complete all steps.');
          observer.complete();
          return;
        }

        let text = '';

        text += responses.genders[gender];
        text += responses.relationships[relationship];

        if (number >= 1 && number <= 4) {
          text += responses.numbers.low;
        } else if (number >= 5 && number <= 8) {
          text += responses.numbers.high;
        }

        observer.next(text);
        observer.complete();
      });
    });
  }
}