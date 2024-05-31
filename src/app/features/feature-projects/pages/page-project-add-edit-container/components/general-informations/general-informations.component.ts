import { Component, ViewEncapsulation } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PrevNextStepperComponent } from 'src/app/shared/components/prev-next-stepper/prev-next-stepper.component';
import { PrevNextButton } from 'src/app/core/models/prev-next-button';
import { PrevNextLabelEnum, PrevNextTypeEnum } from 'src/app/core/enums/prev-next.enum';

import { InputTextModule } from 'primeng/inputtext';
import { EditorModule } from 'primeng/editor';
import { ProjectStepperService } from 'src/app/core/services/project/project-stepper.service';
import { ProjectDataService } from 'src/app/core/services/project/project-data.service';
import { ProjectStepperLabelEnum } from 'src/app/core/enums/project.enum';

@Component({
  selector: 'app-general-informations',
  standalone: true,
  imports: [
    NgIf,
    InputTextModule,
    EditorModule,
    ReactiveFormsModule,
    PrevNextStepperComponent
  ],
  templateUrl: './general-informations.component.html',
  styleUrls: ['./general-informations.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class GeneralInformationsComponent {

  generalDataForm !: FormGroup;
  isNextOrPrevButtonClicked = false;
  prevNextButton !: PrevNextButton[];

  constructor(
    private fb : FormBuilder,
    private router : Router,
    private activatedRoute : ActivatedRoute,
    private stepperService : ProjectStepperService,
    private projectDataService : ProjectDataService
  ){}

  ngOnInit(): void {
    this.initForm();
    this.getDataAndSetForm();
    this.initPrevNextButton();
  }

  private initForm() {
    this.generalDataForm = this.fb.group(
      {
        name : ["", Validators.required],
        purpose: ["", Validators.required],
        work: ["", Validators.required],
        context: ["", Validators.required],      
      }
    )
  }

  get form() {
    return this.generalDataForm.controls
  }

  initPrevNextButton(){
    this.prevNextButton = [
      {
        url:"/projets/creer/multimedias",
        label: PrevNextLabelEnum.Next,
        type : PrevNextTypeEnum.Next  
      }
    ]
  }

  onPrevNextButtonEvent($event : PrevNextButton){
    const menu = $event;
    this.isNextOrPrevButtonClicked = true;

    if(menu.type === PrevNextTypeEnum.Next){
      if(this.generalDataForm.invalid){
        return;
      }
    }

    this.stepperService.updateCurrentStep(menu.url);
    this.projectDataService.updateProjectData({generalData : this.generalDataForm.value});
    this.stepperService.updateValidStep(ProjectStepperLabelEnum.GeneralInformation);
    
    this.router.navigateByUrl(menu.url);
  }

  private getDataAndSetForm(){
    const generalData =  this.projectDataService.getProjectData().generalData;

    if(generalData){
      this.generalDataForm.patchValue({
        name : generalData.name,
        purpose : generalData.purpose,
        work : generalData.work,
        context : generalData.context
      })
    }
  }
}
