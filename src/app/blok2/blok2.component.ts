import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-blok2',
  standalone: true,
  imports: [],
  templateUrl: './blok2.component.html',
  styleUrl: './blok2.component.scss'
})
export class Blok2Component {

  @Output() replaceText = new EventEmitter<void>();
  @Output() appendText = new EventEmitter<void>();

  onReplaceClick() {
    this.replaceText.emit();
  }

  onAppendClick() {
    this.appendText.emit();
  }

}
