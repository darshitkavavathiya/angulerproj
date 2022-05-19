import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {  
    
} 
  countrys=["India","Usa","China","Japan","uk"];

  onCountryClick(country:string){
      this.router.navigate(['/parameterpassing',country]);
  }
  


  
 
}
