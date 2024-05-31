import { Routes } from '@angular/router';
import { ProcessState } from './core/enums/process-state.enum';

export const routes: Routes = [
    {
        path:"projets",
        children : [
            {
                path:"",
                loadComponent: () => import('./features/feature-projects/pages/page-projects-list-container/page-projects-list-container.component').then(m => m.PageProjectsListContainerComponent)
            },
            {
                path :"creer",
                loadComponent: () => import('./features/feature-projects/pages/page-project-add-edit-container/page-project-add-edit-container.component').then(m => m.PageProjectAddEditContainerComponent),
                data:{
                    processState : ProcessState.Create
                },
                children : [
                    {
                        path:"informations-globales",
                        loadComponent: () => import('./features/feature-projects/pages/page-project-add-edit-container/components/general-informations/general-informations.component').then(m => m.GeneralInformationsComponent),
                    },
                    {
                        path:"multimedias",
                        loadComponent: () => import('./features/feature-projects/pages/page-project-add-edit-container/components/multimedias/multimedias.component').then(m => m.MultimediasComponent),
                    },
                    {
                        path:"fonctionnalites",
                        loadComponent: () => import('./features/feature-projects/pages/page-project-add-edit-container/components/functionalities/functionalities.component').then(m => m.FunctionalitiesComponent),
                    },
                    {
                        path:"processus",
                        loadComponent: () => import('./features/feature-projects/pages/page-project-add-edit-container/components/process/process.component').then(m => m.ProcessComponent),
                    },
                    {
                        path:"technos",
                        loadComponent: () => import('./features/feature-projects/pages/page-project-add-edit-container/components/technologies/technologies.component').then(m => m.TechnologiesComponent),
                    },
                    {
                        path:"finalisation",
                        loadComponent: () => import('./features/feature-projects/pages/page-project-add-edit-container/components/stepper-validation/stepper-validation.component').then(m => m.StepperValidationComponent),
                    },
                    {
                        path :"",
                        redirectTo: "informations-globales",
                        pathMatch: "full"
                    }
                ],
            },
            {
                path :"modifier/:id",
                loadComponent: () => import('./features/feature-projects/pages/page-project-add-edit-container/page-project-add-edit-container.component').then(m => m.PageProjectAddEditContainerComponent)
            },
            {
                path :"",
                redirectTo: "liste-de-projets",
                pathMatch: "full"
            }
        ]
    },
    {
        path:"",
        loadComponent: () => import('./features/feature-home/pages/page-home/page-home.component').then(m => m.PageHomeComponent)
    }
];