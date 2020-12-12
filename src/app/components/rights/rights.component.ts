import { Component, OnInit } from '@angular/core';
import { Right } from '../../models/right.model';
import { RightService } from '../../services/right.service';

@Component({
  selector: 'app-rights',
  templateUrl: './rights.component.html',
  styleUrls: ['./rights.component.scss'],
})
export class RightsComponent implements OnInit {
  rights: Right[];
  totalPickupsTimes = 0;

  constructor(private rightService: RightService) {}

  ngOnInit(): void {
    this.rightService.getRights().subscribe((rights) => {
      this.rights = rights;
      for (const right of rights) {
        this.totalPickupsTimes += right.pickupsTimes;
      }
    });
  }
}
