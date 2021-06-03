import { LoginFormComponent } from '../views/login-form/login-form.component';
import { Routes } from "@angular/router";
import { CircleBarComponent } from "../views/circle-bar/circle-bar.component";
import { IndicatorsComponent } from "../views/indicators/indicators.component";
import { AuthGuard } from "../guard/auth.guard"


export const routes: Routes = [
  {path: 'login', component: LoginFormComponent},
  {path: 'first-task', component: CircleBarComponent, canActivate: [AuthGuard]},
  {path: 'second-task', component: IndicatorsComponent, canActivate: [AuthGuard]},

];
