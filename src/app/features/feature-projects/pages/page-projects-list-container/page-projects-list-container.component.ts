import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Observable, map, of } from 'rxjs';
import { TopHeader } from 'src/app/core/models/top-header';
import { PageTopHeaderComponent } from 'src/app/shared/components/page-top-header/page-top-header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectsTabsFilterComponent } from './components/projects-tabs-filter/projects-tabs-filter.component';
import { RouterLink } from '@angular/router';
import { ProjectDataService } from 'src/app/core/services/project/project-data.service';


@Component({
  selector: 'app-page-projects-list-container',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink,
    FontAwesomeModule,
    PageTopHeaderComponent,
    ProjectsTabsFilterComponent
  ],
  templateUrl: './page-projects-list-container.component.html',
  styleUrls: ['./page-projects-list-container.component.scss']
})
export class PageProjectsListContainerComponent implements OnInit {

  topHeaderPageData !: TopHeader;
  projectFilteredItems$ !: Observable<any>;
  projects$ !: Observable<any>;

  faPlus = faPlus;

  constructor( private projectService : ProjectDataService){}
  
  ngOnInit(): void {
    this.getTopHeaderPageData();
    this.getProjectFilters();
  }

  getTopHeaderPageData() : void{
    this.topHeaderPageData = { title : "Gestion Des Projets", description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit"}
  }

  getProjectFilters() : void {
    this.projectFilteredItems$ = of([
      {
        id : 1,
        title : "Tous les projets",
        total : 957,
        isActive : false
      },
      {
        id : 2,
        title : "Projets phares",
        total : 5,
        isActive : false
      },
      {
        id : 3,
        title : "Projets classiques",
        total : 12,
        isActive : false
      }
    ])
  }

  getProjectListByFilter(event : any){

    const id = event;

    this.projectFilteredItems$ = this.projectFilteredItems$.pipe(
      map((projectFilters : any) => projectFilters.map((projectFilter : any) => {
        return { ...projectFilter, isActive: false };
      })),
      map(projectFilters => projectFilters.map((projectFilter : any) => {
        if (projectFilter.id === id) {
          return { ...projectFilter, isActive: true };
        }
        return projectFilter;
      }))
    )

    //this.projects$ = this.projectService.getProjects();
  }

}
