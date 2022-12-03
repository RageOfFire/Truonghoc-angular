import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTruonghocComponent } from './components/add-truonghoc/add-truonghoc.component';
import { TruonghocDetailsComponent } from './components/truonghoc-details/truonghoc-details.component';
import { TruonghocListComponent } from './components/truonghoc-list/truonghoc-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'truonghoc', pathMatch: 'full' },
  { path: 'truonghoc', component: TruonghocListComponent },
  { path: 'truonghoc/:id', component: TruonghocDetailsComponent },
  { path: 'add', component: AddTruonghocComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
