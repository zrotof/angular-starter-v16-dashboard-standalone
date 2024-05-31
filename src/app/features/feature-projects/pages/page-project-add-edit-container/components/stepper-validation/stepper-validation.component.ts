import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//import { ConvertStringLabelToFontawesomeIconPipe } from 'src/app/core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';

@Component({
  selector: 'app-stepper-validation',
  templateUrl: './stepper-validation.component.html',
  styleUrls: ['./stepper-validation.component.scss'],
  encapsulation : ViewEncapsulation.None,
  standalone : true,
  imports : [
    NgClass,
    NgIf,
    NgFor,
    FontAwesomeModule,
    //ConvertStringLabelToFontawesomeIconPipe
  ]
})
export class StepperValidationComponent implements OnInit {
  

  isNextOrPrevButtonClicked = false;

  errorMessages : any =[];
  steps : any;
  areDataCorrect = true;

  constructor(
    private router : Router,
  ){}

  ngOnInit(): void {
    //this.getStepsNamesAndData();
    //this.initActionButton();
  }

  /*

  getStepsNamesAndData() : any {
    this.steps = [
      {
        stepName : TourismAddEditStepEnum.GENERALDATA,
        label : "Informations Globales",
        data : this.tourPackageData?.generalData
      },
      {
        stepName : TourismAddEditStepEnum.PROGRAMS,
        label : "Programmes",
        data : this.tourPackageData?.programs
      },
      {
        stepName : TourismAddEditStepEnum.MULTIMEDIAS,
        label : "Multimédias",
        data : this.tourPackageData?.multimedias
      },
      {
        stepName : TourismAddEditStepEnum.INCLUDES,
        label : "Ce qui est inclus",
        data : this.tourPackageData?.includes
      },
      {
        stepName : TourismAddEditStepEnum.FARES,
        label : "Tarifs",
        data : this.tourPackageData?.rates
      }
    ]
  }

  isStepDataValid( step : any) : boolean{

    switch(step.stepName){
      case TourismAddEditStepEnum.GENERALDATA:
        return this.isGeneralInfoValid(step.data)

      case TourismAddEditStepEnum.PROGRAMS:
        return this.isProgramValid(step.data)
      
      case TourismAddEditStepEnum.MULTIMEDIAS:
        return this.isMultimediasValid(step.data)
      
      case TourismAddEditStepEnum.INCLUDES:
        return this.isIncludesValid(step.data)
      
      case TourismAddEditStepEnum.FARES:
        return this.isFaresValid(step.data)
                    
      default:
        return false;
    }
  }

  initActionButton(){
    this.actionbuttons = [
      {
        url:"/tourisme/packages-touristiques/creer/tarifs",
        label: "Retour"
      }
    ]
  }

  /**
   * This function is used to handle next or prev page event 
   
  onPrevNextButtonEvent($event : PrevNextButton){
    const menu = $event;
    this.router.navigateByUrl(menu.url);
  }

  onCreatePackage(){
    const tourPackage = new FormData();
    this.packageApiService.createPackage(tourPackage)
  }

  isGeneralInfoValid(stepdata : any) : boolean {
    this.areDataCorrect = true;
    return false;
  }

  isProgramValid(stepdata : any) : boolean {
    return false;
  }

  isMultimediasValid(stepdata : any) : boolean {
    return true;
  }

  isIncludesValid(stepdata : any) : boolean {
    return true;
  }

  isFaresValid(stepdata : any) : boolean {
    return false;
  }
*/
}
