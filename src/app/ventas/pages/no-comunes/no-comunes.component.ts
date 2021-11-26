
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18n Select
  nombre: string = 'Jorge';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18n Plural
  clientes: string[] = ['Maria', 'Pedro', 'Juan','Jorge' ];

  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente(){
    this.nombre = 'Maria';
    this.genero = 'femenino';
  }

  borrarCliente(){
    this.clientes.shift();
  }


  //KeyValue Pipe
  persona = {
    nombre: 'Jorge',
    edad : 22,
    direccion: ' Bucaramanga '
  }

  // JsonPipe
  heroes = [
    {
      nombre: 'superman',
      vuela: true
    },
    {
      nombre: 'robin',
      vuela: false
    },
    {
      nombre: 'batman',
      vuela: false
    }
  ]

  // Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) =>{

    setTimeout(() => {
      resolve( 'Tenemos data de promesa')
    }, 3500);
  });

}
