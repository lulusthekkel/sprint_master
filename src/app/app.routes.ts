import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { InputComponent } from './createstory/input';
import { Dashboard } from './dashboard/dashboard';
import { Reports } from './reports/reports';
import { Issues } from './issues/issues';
import { Display } from './storyList/display';
import { Sprint } from './sprint/sprint';

export const routes: Routes = [
    { path: 'issues', component: Issues },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path:'input',component:InputComponent},
    {path:'display',component:Display},
    { path: 'dashboard', component: Dashboard },
    { path: 'reports', component: Reports },
    {path:'sprint',component:Sprint}];
