import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Pos } from '../pos/pos.model';
import { PosService } from '../pos.service';

@Component({
  selector: 'app-pos-detail',
  templateUrl: './pos-detail.component.html',
  styleUrls: ['./pos-detail.component.scss'],
})
export class PosDetailComponent implements OnInit {
  posDetail: Pos;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private posService: PosService
  ) {}

  ngOnInit(): void {
    this.getPosDetail();
  }

  getPosDetail(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.posService
      .getPosDetail(id)
      .subscribe((posDetail) => (this.posDetail = posDetail));
  }

  goBack(): void {
    this.location.back();
  }
}
