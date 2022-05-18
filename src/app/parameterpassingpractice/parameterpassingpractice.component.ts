import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-parameterpassingpractice',
  templateUrl: './parameterpassingpractice.component.html',
  styleUrls: ['./parameterpassingpractice.component.css']
})
export class ParameterpassingpracticeComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }
  countryname:any;
  ngOnInit(): void {
    // let country = this.route.snapshot.paramMap.get('country');
    // this.countryname = country;

    this.route.paramMap.subscribe((param:ParamMap)=>{
      let country = param.get('country');
       this.countryname = country;
    })
  }

  BacktoCountry(){
    let name = this.countryname ? this.countryname : null;
    this.router.navigate(['/testcomponent',{country:name}])
  }

}
