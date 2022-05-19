import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelcase'
})
export class CamelcasePipe implements PipeTransform {

  transform(value:string): string {

 
const myArray = value.split(" ");
 var result="";
  
   myArray.forEach(element => {
     var temp= element.toLowerCase();
      result +=  temp[0].toUpperCase()+temp.substring(1);

    });

    return result[0].toLowerCase()  + result.substring(1); 
  }


}
