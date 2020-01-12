import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "imagenAleatoria"
})
export class ImagenAleatoriaPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (typeof value != "undefined" && value) {
      return value;
    }
    let random = Math.floor(Math.random() * 5) + 1;
    value = "./assets/images/agencias/" + random.toString() + ".jpg";
    return value;
  }
}
