import { Component, OnInit, Input } from '@angular/core';
import { OddViewModel } from '../view-models/odd-view-model';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.scss']
})
export class OddComponent implements OnInit {
  @Input() odd: OddViewModel;
  count: number = 0;
  constructor() { }

  ngOnInit() {
    
  }
  changeOddColor() {
    if(this.odd.value > this.odd.previousValue) {
      return "odd_increased"
    }
  
    else if (this.odd.value < this.odd.previousValue) {
      return "odd_decreased"
    }
  }
 selectOdd(odd){
   this.count++;
   if(this.count % 2 != 0){
   odd.isClicked = true;
  }
  else if(this.count % 2 === 0){
    odd.isClicked = false;
   }
 }
}
