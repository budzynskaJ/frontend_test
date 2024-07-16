import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blok1',
  standalone: true,
  imports: [],
  templateUrl: './blok1.component.html',
  styleUrl: './blok1.component.scss'
})
export class Blok1Component {

    selectedOption: string = 'option1';

    constructor() { }

    ngOnInit(): void {
      const storedOption = localStorage.getItem('selectedOption');
      if (storedOption) {
        this.selectedOption = storedOption;
      } else {
        this.selectedOption = 'option1'; // Domyślna wartość
        localStorage.setItem('selectedOption', 'option1');
      }
    }
}
