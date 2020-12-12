import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { POS } from '../mock/mock-pos';
import { Pos } from '../models/pos.model';

@Injectable({
  providedIn: 'root',
})
export class PosService {
  constructor() {}

  getPosList(): Observable<Pos[]> {
    return of(POS);
  }

  getPosDetail(id: number): Observable<Pos> {
    return of(POS.find((posDetail) => posDetail.id === id));
  }
}
