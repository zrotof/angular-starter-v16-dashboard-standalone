import { NgClass, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProcessState } from 'src/app/core/enums/process-state.enum';
import { StepMenu } from 'src/app/core/models/step-menu';

@Component({
  selector: 'app-stepper-workflow-menu',
  templateUrl: './stepper-workflow-menu.component.html',
  styleUrls: ['./stepper-workflow-menu.component.scss'],
  standalone : true,
  imports : [
    NgClass,
    NgFor
  ]
})

export class StepperWorkflowMenuComponent{

  @Input() stepperMenus !: StepMenu[];
  @Input() processState !: ProcessState;

  @Output() navigateByStepMenu = new EventEmitter<string>();

  onStepNavigationEvent(url ?: string){
    this.navigateByStepMenu.emit(url);
  }

}

