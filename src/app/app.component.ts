import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlipCardComponent } from './flip-card/flip-card.component';
import { FlipCardFrontComponent } from './flip-card/flip-card-front';
import { FlipCardBackComponent } from './flip-card/flip-card-back';

@Component({
  selector: 'app-root',
  imports: [FlipCardComponent, FlipCardFrontComponent, FlipCardBackComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'flipcard19';
}
