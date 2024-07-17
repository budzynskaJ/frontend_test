import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blok3',
  standalone: true,
  imports: [],
  templateUrl: './blok3.component.html',
  styleUrl: './blok3.component.scss'
})
export class Blok3Component {

  @Input() content: string = '';

  constructor() {}

  replaceText(newText: string) {
    this.content = newText;
  }

  appendText(newText: string) {
    if (!this.content.includes(newText)) {
      this.content += newText;
    } else {
      console.log('Tekst już istnieje, doklejanie zostało pominięte.');
    }
  }

}
