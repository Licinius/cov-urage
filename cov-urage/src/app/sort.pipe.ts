import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(array: Array<Object>, property:string): Array<Object> {
  	if(array!== undefined){
    	array.sort(function (a: Object, b: Object){
    		if(a[property] === undefined && b[property] === undefined) return 0;
    		if (a[property] === undefined) return -1;
    		if (b[property] === undefined) return 1;

    		if (a[property] < b[property]) return -1;
    		if (a[property] > b[property]) return 1;
    		return 0;
    	});
    	return array;
  	}
  }

}
