import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { PropercasePipe } from '../propercase.pipe';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {

  message = "This is a Custom Pipe";
  
  camelcase= "";

 public showcameltext=false

  constructor() { }
  
  ngOnInit(): void {
    
  }

  showcamelcase(){
      this.showcameltext = !this.showcameltext;
  }
}
