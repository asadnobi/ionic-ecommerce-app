import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LazyLoadImageModule } from 'ng-lazyload-image';
//components
import { OfferComponent } from './offer.component';
import { CommonToolbarModule } from '../../common-toolbar/common-toolbar.module';

const routes: Routes = [
  {
    path: '',
    component: OfferComponent
  }
];

@NgModule({
  declarations: [OfferComponent],
  imports: [
    CommonModule, IonicModule, RouterModule.forChild(routes),
    LazyLoadImageModule,
    CommonToolbarModule
  ]
})
export class OfferModule { }
