import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { ProjectStepperLabelEnum } from '../../enums/project.enum';

@Injectable({
  providedIn: 'root'
})

export class ProjectDataService {

  private projectData = signal<any>({});

  constructor(
    private localStorageService : LocalStorageService
  ) {}

  getProjectData() : any {
    return this.projectData();
  }

  updateProjectData(newData : any) : void {
    this.projectData.update( project =>  {
      return {...project, ...newData}
    })
    this.localStorageService.setItem("projectData", this.projectData());
  }

  clearProjectData() : void {
    this.projectData.set({})
  }

  setGeneralData(isComplete: boolean) {
    //this._isGeneralDataCompleted$.next(isComplete);
    //this.localstorageService.setItem("isGeneralDataCompleted", JSON.stringify(isComplete))
  }

  getProjectDataByStepLabel(stepLabel: string): any {
    switch (stepLabel) {
      case ProjectStepperLabelEnum.GeneralInformation:
        return this.getProjectData()?.generalData;
      case ProjectStepperLabelEnum.Multimedias:
        return this.getProjectData()?.multimedias;
    }
  }

  

}
