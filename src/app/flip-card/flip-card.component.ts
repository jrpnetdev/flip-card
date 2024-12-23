import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FlipCardBackComponent } from './flip-card-back';
import { FlipCardFrontComponent } from './flip-card-front';

@Component({
  selector: 'flip-card',
  imports: [CommonModule],
  templateUrl: './flip-card.component.html',
  styleUrl: './flip-card.component.css'
})
export class FlipCardComponent {
  toggleProperty = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.toggleProperty = !this.toggleProperty;
  }
}
