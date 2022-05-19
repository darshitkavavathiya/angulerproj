import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  showColor= false;  
  
  


  constructor() { }

  ngOnInit(): void {
   
  }

  public changeColor(): void {  
    this.showColor = !this.showColor;  
}  

}
