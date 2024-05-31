import { Injectable, signal } from '@angular/core';
import { StepMenu } from '../../models/step-menu';
import { GeneralInformation } from '../../models/project';
import { ProjectStepperLabelEnum } from '../../enums/project.enum'
import { ProjectDataService } from './project-data.service';
@Injectable({
  providedIn: 'root'
})

export class ProjectStepperService {

  private isGeneralDataIsValid = signal<boolean>(false);
  private isMultimediaIsValid = signal<boolean>(false);
  private isFunctionnalitiesIsValid = signal<boolean>(false);
  private isProcessesIsValid = signal<boolean>(false);
  private isTechnosIsValid = signal<boolean>(false);

  projectsStepMenuData = signal<StepMenu[]>(
    [
      {
        label : ProjectStepperLabelEnum.GeneralInformation,
        url : "/projets/creer/informations-globales",
        active : false,
        completed : this.isGeneralDataIsValid()
      },
      {
        label : ProjectStepperLabelEnum.Multimedias,
        url : "/projets/creer/multimedias",
        active : false,
        completed : this.isMultimediaIsValid()
      },
      {
        label : ProjectStepperLabelEnum.Functionnalities,
        url : "/projets/creer/fonctionnalites",
        active : false,
        completed : this.isFunctionnalitiesIsValid()
      },
      {
        label : ProjectStepperLabelEnum.Processes ,
        url : "/projets/creer/processus",
        active : false,
        completed :  this.isProcessesIsValid()
      },
      {
        label : ProjectStepperLabelEnum.Technologies,
        url : "/projets/creer/technos",
        active : false,
        completed : this.isTechnosIsValid()
      },
      {
        label : ProjectStepperLabelEnum.Finalisation,
        url : "/projets/creer/finalisation",
        active : false,
        completed : this.isGeneralDataIsValid() && this.isMultimediaIsValid() && this.isFunctionnalitiesIsValid() && this.isProcessesIsValid() && this.isTechnosIsValid()
      }
    ]
  );

  constructor(
    private projectDataService : ProjectDataService
  ){}
  
  getProjectsStepMenuData() : StepMenu[] {
    return this.projectsStepMenuData();
  }

  updateCurrentStep( url : string) : void {

    const steps = this.getProjectsStepMenuData();
    
    steps.forEach((step : StepMenu) => {
      step.active = false
    })

    const currentStep = steps.find((step : StepMenu) => step.url === url)

    if(currentStep){
      currentStep.active = true;
    }

    this.projectsStepMenuData.set(steps);
  }

  updateValidStep(projectStepLabel : string) : void {
    this.projectsStepMenuData.update((stepMenuData)=> {
      const menu = stepMenuData.find(data => data.label = projectStepLabel);
      if(menu){
        const data = this.projectDataService.getProjectDataByStepLabel(projectStepLabel);
        menu.completed = this.checkIfGeneralInformationIsValid(data);
      }
      return stepMenuData;
    })

  }

  checkIfGeneralInformationIsValid(generalInformation : GeneralInformation) : boolean {
    
    if(generalInformation.name.length < 1){
      return false;
    }

    if(generalInformation.purpose.length < 1){
      return false;
    }

    if(generalInformation.work.length < 1){
      return false;
    }

    if(generalInformation.context.length < 1){
      return false;
    }

    return true;
  }
}