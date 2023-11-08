import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mat-card',
  templateUrl: './mat-card.component.html',
  styleUrls: ['./mat-card.component.css']
})
export class MatCardComponent {
  @Input() name: string = ' ';
  @Input() detail: string = ' ';
  @Input() price: string = ' ';


}
