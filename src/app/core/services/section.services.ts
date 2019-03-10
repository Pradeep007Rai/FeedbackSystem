import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { SectionModule } from '../modules/section.model';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SectionService {
  sections: SectionModule[];

  private handleError<String> (operation = 'operation', result?: string) {
    return (error: any): Observable<string> => {
      return of('server erorr');
    };
  }

getSection(): Observable<SectionModule[]> {
  return this.http.get<SectionModule[]>('assets/section.json').pipe(
    catchError(this.handleError('getSection', []))
  );
}
  constructor(private http: HttpClient) {
  }
}