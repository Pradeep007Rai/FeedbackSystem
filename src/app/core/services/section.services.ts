import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { SectionModule } from '../modules/section.model';


@Injectable({
  providedIn: 'root'
})
export class SectionService {
  sections: SectionModule[];

getSection(): Observable<SectionModule[]> {
  return this.http.get<SectionModule[]>('assets/section.json');
}
  constructor(private http: HttpClient) {
  }
}