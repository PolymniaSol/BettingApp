import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-slip',
  templateUrl: './slip.component.html',
  styleUrls: ['./slip.component.scss']
})

export class SlipComponent implements OnInit {
  stake: string = '0';
  constructor() { }

  ngOnInit() {
  }

  numReceived(value) {
    if((value == '.')||(value == '0')||(value == '1')||(value == '2')||(value == '3')||(value == '4')||(value == '5')||(value == '6')||(value == '7')||(value == '8')||(value == '9')){
      this.stake += value;
      if(this.stake.split('.').length > 2)
      {
        alert("Invalid Input. Please try again.");
        this.stake = '0';
    }
    if(Math.floor(+this.stake)>9999)
      {
        alert("Maximun stake is 9999.99€. Please try again.");
        this.stake = '0';
    }
}
    else if(value == 'clear'){this.stake = '0';} 
  
  }
}
