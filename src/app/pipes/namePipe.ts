import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
    name: 'searchfilter'
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {
    transform(value: any, input: string) {
        if (input) {
            input = input.toString().toLowerCase();
            console.log(input);
            return value.filter(function (el: any) {
                console.log(el.name);
                return el.name.toString().toLowerCase().indexOf(input) > -1;
            })
        }
        return value;
    }
}