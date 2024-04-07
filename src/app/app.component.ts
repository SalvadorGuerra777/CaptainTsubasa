import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import {IncrementButtonComponent} from "./increment-button/increment-button.component"

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, IncrementButtonComponent]
})
export class AppComponent {
  title = 'captain-tsubasa-web';
}
