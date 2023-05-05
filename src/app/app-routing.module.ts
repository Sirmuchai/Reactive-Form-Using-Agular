import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  { path: ' ', component: AppComponent},
  { path: 'products', component: ProductComponent},
  { path: 'forms', component: FormComponent}
]

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
