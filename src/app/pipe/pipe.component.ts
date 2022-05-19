import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  public todayDate = new Date();  
    public amount = 100;  
 public message = "hello tHIs Is Semple mesSage for piPe";
  
  constructor() { }  
  
  ngOnInit(): void {  
    
  
  }



}
