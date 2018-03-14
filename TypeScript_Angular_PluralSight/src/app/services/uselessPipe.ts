import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'uselessPipe'})
export class uselessPipe implements PipeTransform {
  transform(value: string, before: string): string {
    let newStr = `${before} ${value}`;
    return newStr;
  }
}