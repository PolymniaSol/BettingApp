import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-num-pad',
  templateUrl: './num-pad.component.html',
  styleUrls: ['./num-pad.component.scss']
})
export class NumPadComponent implements OnInit {
  @Output() buttonClick = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
buttonClicked(value: string){

this.buttonClick.emit(value);

}
}