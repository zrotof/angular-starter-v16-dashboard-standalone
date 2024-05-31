import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PrevNextButton } from 'src/app/core/models/prev-next-button';

@Component({
  selector: 'app-prev-next-stepper',
  templateUrl: './prev-next-stepper.component.html',
  styleUrls: ['./prev-next-stepper.component.scss'],
  standalone: true,
  imports : [
    NgFor
  ]
})
export class PrevNextStepperComponent {

  @Input() buttons !: PrevNextButton[];
  @Output() prevNextButtonClicked = new EventEmitter<PrevNextButton>()

  handleButtonClicked(buttom : PrevNextButton){
    this.prevNextButtonClicked.emit(buttom);
  }
}
