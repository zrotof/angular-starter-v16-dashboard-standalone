import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { ProcessState } from 'src/app/core/enums/process-state.enum';
import { StepMenu } from 'src/app/core/models/step-menu';
import { TopHeader } from 'src/app/core/models/top-header';
import { ProjectStepperService } from 'src/app/core/services/project/project-stepper.service';
import { PageTopHeaderComponent } from 'src/app/shared/components/page-top-header/page-top-header.component';
import { StepperWorkflowMenuComponent } from 'src/app/shared/components/stepper-workflow-menu/stepper-workflow-menu.component';

@Component({
  selector: 'app-page-project-add-edit-container',
  standalone: true,
  imports: [
    RouterOutlet,
    PageTopHeaderComponent,
    StepperWorkflowMenuComponent
  ],
  templateUrl: './page-project-add-edit-container.component.html',
  styleUrls: ['./page-project-add-edit-container.component.scss']
})
export class PageProjectAddEditContainerComponent implements OnInit {

  topHeaderPageData !: TopHeader;
  isEditMode = false;
  stepperMenus !: StepMenu[];

  processState !: ProcessState;

  constructor( 
    private router : Router,
    private activatedRoute : ActivatedRoute,
    private stepperService : ProjectStepperService
  ){}

  ngOnInit(): void {
    this.getCurrentProcessState();
    this.checkEditMode();
    this.getTopHeaderPageData();   
    this.getStepperMenu(); 
    this.stepperService.updateCurrentStep(this.router.url);
  }

  getTopHeaderPageData() : void{

    if(this.isEditMode === true){
      this.topHeaderPageData = { title : "Edition D'un projet", description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit"}
      return ;
    }
    this.topHeaderPageData = { title : "Creation Un Nouveau Projet", description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit"}
  }

  checkEditMode(){
    this.activatedRoute.params.subscribe(
      {
        next : (params : any)=>{
          if(params.id){
            this.isEditMode = true;
/*
            this.artcileService.getArticleById(params.id).subscribe(
              (result : any) => {
                if(result.status === "success"){
                  //initialising first data when edit in order to know if value have any changes
                  this.initialArticleDataWhenEdit = result.data;

                  this.articleForm.controls['title'].setValue(this.initialArticleDataWhenEdit.title);
                  this.articleForm.controls['description'].setValue(this.initialArticleDataWhenEdit.description);
                  this.articleForm.controls['date'].setValue(new Date(this.initialArticleDataWhenEdit.date));
                  this.articleForm.controls['hour'].setValue(this.initialArticleDataWhenEdit.hour);
                  this.articleForm.controls['content'].setValue(this.initialArticleDataWhenEdit.content);
                  this.articleForm.controls['hasVideo'].setValue(this.initialArticleDataWhenEdit.hasVideo);
                  this.articleForm.controls['videoLink'].setValue(this.initialArticleDataWhenEdit.videoLink);
                  
                  this.articleRubrics$.subscribe({
                    next : (result) => {
                      const currentRubric = result.filter(res => res.id === this.initialArticleDataWhenEdit.rubricId)
                      this.articleForm.controls['rubric'].setValue(currentRubric[0]);
                    }
                  })

                  const imagePreviewed = <HTMLImageElement>document.getElementById('image-previewed');
                  this.imageDisplay = `${this.initialArticleDataWhenEdit.coverImage}`;
                  imagePreviewed.style.display = 'block';
                  this.articleForm.controls['coverImage'].clearValidators();
                  this.articleForm.controls['coverImage'].updateValueAndValidity();
                }
              },
              () =>{
                this.messageService.add({
                  severity:'warn', 
                  detail: 'Article inexistant, contactez le webmaster'
                });
                return;
              }
            )

            */
          }
        }
      }
    )
  }

  getCurrentProcessState(): void {
    //this.processState = this.activatedRoute.snapshot.data['processState']
    this.processState = ProcessState.Edit
  }

  getStepperMenu() : void {
    this.stepperMenus = this.stepperService.getProjectsStepMenuData();

    if(this.processState === ProcessState.Create){

    }
  }

  onNavigateByStepMenuHandler(event:any) : void {
    if(this.processState === ProcessState.Edit){
      console.log(this.processState)

      const url = event as string;
      this.stepperService.updateCurrentStep(url);

      this.router.navigateByUrl(url);
    }
  }

}
