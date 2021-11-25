import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'jorge';
  nombreUpper: string = 'JORGE';
  nombreCompleto: string = 'jorge bUrgos';

}
