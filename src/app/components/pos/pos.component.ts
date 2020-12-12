import { Component, OnInit } from '@angular/core';
import { PosService } from '../../services/pos.service';
import { Pos } from '../../models/pos.model';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss'],
})
export class PosComponent implements OnInit {
  posArray: Pos[];

  constructor(private posService: PosService) {}

  ngOnInit(): void {
    this.getPosArray();
  }

  getPosArray(): void {
    this.posService.getPosList().subscribe((posArray) => {
      this.posArray = posArray;
    });
  }
}
