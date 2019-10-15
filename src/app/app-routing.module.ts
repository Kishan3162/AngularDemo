import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultiplyComponent } from './multiply/multiply.component';
import { AboutUSComponent } from './about-us/about-us.component';

const routes: Routes = [
 // { path: '', redirectTo: 'multiply', pathMatch: 'full' },
  { path: 'multiply', component: MultiplyComponent },
  { path: 'aboutus', component: AboutUSComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
