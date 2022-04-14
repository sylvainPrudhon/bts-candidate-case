import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "capitalize"
})
export class CapitalizeFirstPipe implements PipeTransform {
  transform(str: string): string {
    if (str == null) {
      return null;
    }
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);

    return str2;
  }
}
