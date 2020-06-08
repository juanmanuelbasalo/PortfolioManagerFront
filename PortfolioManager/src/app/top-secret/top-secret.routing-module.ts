import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from './../shell/shell.service';
import { IndexComponent } from './index/index.component';
import { AuthGuardService } from '../core/authentication/AuthGuard.service';

const routes: Routes = [
    Shell.childRoutes([
        { path: 'topsecret', component: IndexComponent, canActivate: [AuthGuardService] }
    ])
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class TopSecretRoutingModule { }