import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MarketViewModel } from '../view-models/market-view-model';
import { OddViewModel } from '../view-models/odd-view-model';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {
@Input() market: MarketViewModel;

  constructor() { }

  ngOnInit() {
  }

}
