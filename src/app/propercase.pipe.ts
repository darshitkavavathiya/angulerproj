import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'propercase'
})
export class PropercasePipe implements PipeTransform {

 
   transform(value: string, reverse: boolean)
   {  
    if (typeof (value) == 'string') {  

        let intermediate = (reverse == false) ? value.toUpperCase() : value.toLowerCase(); 
        return (reverse == false ? intermediate[0].toLowerCase() : intermediate[0].toUpperCase()) + intermediate.substr(1);  
    }  
    else {  
        return value;  
    }  
  }  

}
