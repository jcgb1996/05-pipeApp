import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  standalone: false,

  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  //i8nselect
  public name: string = 'Fernando';
  public gender:  'male' | 'female' = 'male';

  public invitationMap = {
    male : 'invitarlo',
    female: 'invitarla'
  }

  chengeCliente(): void {
    this.name = 'Maria';
    this.gender = 'female';
  }


  //i18nPlural
  public clients: string[] =  [
    'Maria', 'Jose', 'Fernando','Eduardo', 'Melissa', 'Maribel', 'Carlos'
  ]
  public clientMap= {
    '=0' : 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'Actualmente tenemos # clientes esperando'
  }

  deleteClient(): void {
    this.clients.shift();
  }


  //KeyValue Pipe
  public person = {
    name: 'Jose',
    age: 28,
    address: 'Guayaquil, Ecuador'
  }

  //Async Pipe
  public myObservableTimer:Observable<number> = interval(2000).pipe(
    tap(
      value => console.log(value)
    )
  );

  public promiseValue: Promise<string> = new Promise( ( resolve, reject ) => {
    setTimeout(() => {
      console.log('Tenemos datos en la promesa');
      resolve('Tenemos datos en la promesa')
    }, 3500);

  } );
}
