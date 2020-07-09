import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pivottable',
  templateUrl: './pivottable.component.html',
  styleUrls: ['./pivottable.component.scss']
})
export class PivottableComponent implements OnInit {

title="pro1";
userData: any=[
  {name:"Arpitha",addr:"Bengaluru",profile:"Developer"},
  {name:"Nishanth",addr:"Hyderabad",profile:"Developer"},
  {name:"Abhishek",addr:"Bengaluru",profile:"Developer"},
  {name:"Shankar",addr:"Mangalore",profile:"Developer"},
]

  constructor() {
    console.log(this.userData)
   }

  ngOnInit(): void {
  }

}
