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
    this.studentList = [  
        { SrlNo: 1, Name: 'Rajib Basak', Course: 'Bsc(Hons)', Grade: 'A' },  
        { SrlNo: 2, Name: 'Rajib Basak1', Course: 'BA', Grade: 'B' },  
        { SrlNo: 3, Name: 'Rajib Basak2', Course: 'BCom', Grade: 'A' },  
        { SrlNo: 4, Name: 'Rajib Basak3', Course: 'Bsc-Hons', Grade: 'C' },  
        { SrlNo: 5, Name: 'Rajib Basak4', Course: 'MBA', Grade: 'B' },  
        { SrlNo: 6, Name: 'Rajib Basak5', Course: 'MSc', Grade: 'B' },  
        { SrlNo: 7, Name: 'Rajib Basak6', Course: 'MBA', Grade: 'A' },  
        { SrlNo: 8, Name: 'Rajib Basak7', Course: 'MSc.', Grade: 'C' },  
        { SrlNo: 9, Name: 'Rajib Basak8', Course: 'MA', Grade: 'D' },  
        { SrlNo: 10, Name: 'Rajib Basak9', Course: 'B.Tech', Grade: 'A' }  
    ];  
} 
  countrys=["India","Usa","China","Japan","uk"];

  onCountryClick(country:string){
      this.router.navigate(['/parameterpassing',country]);
  }
  showColor= false;  
  
  
  public changeColor(): void {  
      this.showColor = !this.showColor;  
  }  


  studentList: Array<any> = new Array<any>();  
  
 
}
