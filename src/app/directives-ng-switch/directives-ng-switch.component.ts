import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-ng-switch',
  templateUrl: './directives-ng-switch.component.html',
  styleUrls: ['./directives-ng-switch.component.css']
})
export class DirectivesNgSwitchComponent implements OnInit {

 
  studentList: Array<any> = new Array<any>();  
  
  


  constructor() { }

  ngOnInit(): void {
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
}
