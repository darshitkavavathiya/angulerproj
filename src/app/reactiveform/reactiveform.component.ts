import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  employee = new FormGroup({
    firstname:new FormControl('')
    ,lastname:new FormControl('')
    ,gender: new FormControl('')
    ,country : new FormControl('')
    ,hobby : new FormArray([
      new FormControl(true),
      new FormControl(true),
      new FormControl(true),
    ])
  });
 name = "";
 countrys=["India","Usa","China","Japan","uk"];


  submit(){
    
    this.name = this.employee.value.firstname;
  }


}
