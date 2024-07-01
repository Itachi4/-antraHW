import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BrowseComponent } from './browse/browse.component';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },

    {
        path:"browse",
        component: BrowseComponent
    },

    {
        path: "**",
        component: LoginComponent
    }
];
