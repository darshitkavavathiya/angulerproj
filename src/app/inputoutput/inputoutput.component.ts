import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputoutput',
  templateUrl: './inputoutput.component.html',
  styleUrls: ['./inputoutput.component.css']
})
export class InputoutputComponent implements OnInit {

  constructor() { }
  @Input() public message :string = '';  
  
  @Input('alert-pop') public message1 :string= '';

  ngOnInit(): void {
  }
  
     
    
    public showAlert():void{  
        alert(this.message1);  
    }  







}
