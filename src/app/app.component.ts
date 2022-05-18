import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulerproj';
  public val: string = "This is alert popup message";  
  public visibilityofinput:boolean = false;
  showinputoutputpart(){
    this.visibilityofinput? (this.visibilityofinput=false) : (this.visibilityofinput=true)
  }

}
