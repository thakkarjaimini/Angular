import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-directive',
  templateUrl: './my-directive.component.html',
  // styleUrls: ['./my-directive.component.css']
  styles: [`.white-text{
    color: white;
}
  `]
})
export class MyDirectiveComponent implements OnInit {

pText ='myDirective works!';
displayText = null;
i=0;
buttonClicks = [];
  constructor() { }

onToggle(){
  if (this.displayText ==true)
  this.displayText = false;
  else this.displayText = true;
  this.buttonClicks.push(this.i);
  this.i++;

}
  ngOnInit() {
  }

}
