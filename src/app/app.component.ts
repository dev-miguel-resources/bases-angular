import { Component } from '@angular/core';
// de padre a hijo: puedo pasar texto plano, variables, objetos, arreglos
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bases-angular';

  x = 'freezer!';
  rpta: number = 0;

  recibirResultado(e: any) {
    this.rpta = e;
  }

}
