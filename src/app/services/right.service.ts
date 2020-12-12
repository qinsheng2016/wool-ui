import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Right } from '../models/right.model';
import { RIGHTS } from '../mock/mock-right';

@Injectable({
  providedIn: 'root',
})
export class RightService {
  constructor() {}

  getRights(): Observable<Right[]> {
    return of(RIGHTS);
  }

  getRightDetail(id: number): Observable<Right> {
    return of(RIGHTS.find((rightDetail) => rightDetail.id === id));
  }
}
