import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  showOptions = false;

  toggleOptions() {
    this.showOptions = !this.showOptions;
    const arrowIcon = document.querySelector('#icon');
    if (arrowIcon) {
      arrowIcon.classList.toggle('rotated');
    }
  }

  resetPage() {
    window.location.reload();
  }

  addName() {
    const header = document.getElementById('header-name');
    if (header) {
      header.innerHTML += 'Justyna Budzyńska'
    }
  }

}
