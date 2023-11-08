import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() colorButton: string = 'primary' ;
  @Input() label: string = ' ';
  @Input() iconName: string = '';
  @Output() onClick: EventEmitter<any> = new EventEmitter()

  onClickButton(): void {
    this.onClick.emit()
  }


}
