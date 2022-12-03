import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTruonghocComponent } from './components/add-truonghoc/add-truonghoc.component';
import { TruonghocDetailsComponent } from './components/truonghoc-details/truonghoc-details.component';
import { TruonghocListComponent } from './components/truonghoc-list/truonghoc-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTruonghocComponent,
    TruonghocDetailsComponent,
    TruonghocListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
