import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BottomComponent } from './bottom/bottom.component';
import { ListComponent } from './list/list.component';
import { RemoveComponent } from './remove/remove.component';

const routes: Routes = [{path:"",component:BottomComponent},{path:"remove",component:RemoveComponent},{path:"all",component:ListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
