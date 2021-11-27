import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform{
    
    transform(valor: string, enMayusculas: boolean = true): string {
        console.log(enMayusculas)
        console.log(valor)

        if( enMayusculas ){
            return valor.toUpperCase();
        } else {
            return valor.toLocaleLowerCase();
        }

        // return (enMayusculas)
        //      ? valor.toUpperCase()
        //      : valor.toLocaleLowerCase();
    }


}