import { Component, OnInit } from '@angular/core';
import { FootballEventViewModel } from '../view-models/football-event-view-model';
import { DataService } from '../services/data-service';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit{
  footballEvents : Array<FootballEventViewModel> = new Array<FootballEventViewModel>();
  constructor(private dataService : DataService){
    }
ngOnInit(){
  this.footballEvents = this.dataService.footballEvents;
 
}


  // footballEvents: Array<FootballEventViewModel> = new Array<FootballEventViewModel>();
  // constructor(private dataService: DataService){
  // }
  // ngOnInit(){
  //   this.footballEvents.push(this.dataService.createFootballEvent());
  //   this.footballEvents.push(this.dataService.createFootballEvent());
  //   this.footballEvents.push(this.dataService.createFootballEvent());
  //   this.footballEvents.push(this.dataService.createFootballEvent());
  //   this.footballEvents.push(this.dataService.createFootballEvent());
  //   this.footballEvents.push(this.dataService.createFootballEvent());
  //   this.footballEvents.push(this.dataService.createFootballEvent());
  //   this.footballEvents.push(this.dataService.createFootballEvent());
  //   this.footballEvents.push(this.dataService.createFootballEvent());
  //   this.footballEvents.push(this.dataService.createFootballEvent());
  //   this.footballEvents.push(this.dataService.createFootballEvent());
  //   this.footballEvents.push(this.dataService.createFootballEvent());
  //   this.footballEvents.push(this.dataService.createFootballEvent());
  //   this.footballEvents.push(this.dataService.createFootballEvent());
  //   this.footballEvents.push(this.dataService.createFootballEvent());
    
  // }

}
