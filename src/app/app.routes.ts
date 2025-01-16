import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { authGuard } from './service/auth.guard';
import { RguardComponent } from './components/rguard/rguard.component';
import { deactivateGuard } from './service/deactivate.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { childActivateGuard } from './service/child-activate.guard';
import { FormComponent } from './components/form/form.component';
import { DefpipeComponent } from './pipes/defpipe/defpipe.component';
import { NgContentComponent } from './components/ng-content/ng-content.component';

export const routes: Routes = [
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    },
    {
        path:'routeGuard',
        component:RguardComponent,
        canDeactivate:[deactivateGuard]

    },
    {
        path:'dashboard',
        component:DashboardComponent,
        canActivate: [authGuard],
        canActivateChild:[childActivateGuard],
        children:[
            {
                path:'profile',
                component:ProfileComponent,
                
            }
        ]
    },
    {
        path:'form',
        component:FormComponent,
        canDeactivate:[deactivateGuard]
    },
    {
        path:"pipes",
        component:DefpipeComponent
    },
    {
        path:'ngcontent',
        component:NgContentComponent
    }
];
