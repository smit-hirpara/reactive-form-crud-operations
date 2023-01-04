import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path:'',redirectTo:'tablecompo',pathMatch:'full'},
  {path:'formcompo',component:FormComponent},
  {path:'update/:id',component:FormComponent},
  {path:'tablecompo',component:TableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
