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


getSection(): Observable<SectionModule[]> | Observable<string> {
  return this.http.get<SectionModule[]>('assets/section.json')
}
  constructor(private http: HttpClient) {
  }
}