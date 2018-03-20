import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-tesla-car',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <div class="tesla-car">
    <div class="tesla-wheels">
      <div class="tesla-wheel tesla-wheel--front tesla-wheel--{{ wheelsize }}"></div>
      <div class="tesla-wheel tesla-wheel--rear tesla-wheel--{{ wheelsize }}"></div>
    </div>
  </div>
  `,
  styleUrls: ['./tesla-car.component.scss']
})
export class TeslaCarComponent implements OnInit {
  @Input() wheelsize: number;
  constructor() { }

  ngOnInit() {
  }

}
