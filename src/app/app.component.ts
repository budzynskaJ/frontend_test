import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NaglowekComponent } from "./naglowek/naglowek.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { Blok1Component } from "./blok1/blok1.component";
import { Blok2Component } from "./blok2/blok2.component";
import { Blok3Component } from "./blok3/blok3.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NaglowekComponent, HeaderComponent, FooterComponent, Blok1Component, Blok2Component, Blok3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projekt-rekrutacyjny';
}
