import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'vuela'
})
export class VuelaPipe implements PipeTransform{
    
    siVuela= 'vuela';
    noVuela= 'no vuela';

    transform(vuela: boolean = true): string {
        

        if( vuela ){
            return this.siVuela;
        } else {
            return this.noVuela;
        }
    }


}