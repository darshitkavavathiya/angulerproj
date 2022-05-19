import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputoutput',
  templateUrl: './inputoutput.component.html',
  styleUrls: ['./inputoutput.component.css']
})
export class InputoutputComponent implements OnInit {

  constructor() { }
  @Input() public message: string = '';

  @Input('alert-pop') public message1: string = '';

    boolean = true
  
    public class={
    "success":this.boolean,
    "style1":this.boolean,
    }
    public classinvert={
      "error":this.boolean,
      "style2":this.boolean
    }

  
  ngOnInit(): void {
  }


    public changeclass():void{
      this.boolean = !this.boolean;
    }


  public showAlert(): void {
    alert(this.message1);
  }







}
