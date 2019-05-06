import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { FootballEventViewModel } from '../view-models/football-event-view-model';
import { MarketViewModel } from '../view-models/market-view-model';

@Component({
  selector: 'app-football-event',
  templateUrl: './football-event.component.html',
  styleUrls: ['./football-event.component.scss']
})
export class FootballEventComponent implements OnInit {
  @Input() footballEvent: FootballEventViewModel;
  @ViewChild('scroll', { read: ElementRef }) private scroll: ElementRef;
  constructor() { }

  ngOnInit() { }

  private scrollRight(){
    this.scroll.nativeElement.scrollTo({ left: (this.scroll.nativeElement.scrollLeft + 150), behavior: 'smooth' });
  }

}
