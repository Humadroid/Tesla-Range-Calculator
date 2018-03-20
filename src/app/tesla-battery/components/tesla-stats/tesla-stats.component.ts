import { Component, OnInit, Input } from '@angular/core';
import { Stat } from '../../models/stat.interface';

@Component({
  selector: 'app-tesla-stats',
  template: `
  <div class="tesla-stats">
    <ul>
      <li *ngFor="let stat of stats">
        <div class="tesla-stats-icon tesla-stats-icon--{{ stat.model | lowercase }}"></div>
        <p>{{ stat.miles }}</p>
      </li>
    </ul>
  </div>
  `,
  styleUrls: ['./tesla-stats.component.scss']
})
export class TeslaStatsComponent implements OnInit {
  @Input() stats: Stat[];
  constructor() { }

  ngOnInit() {
  }

}
