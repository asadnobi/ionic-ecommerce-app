import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

import { ReviewPageMenuComponent } from './review-page-menu.component';

const routes: Routes = [
  { path: '', component: ReviewPageMenuComponent}
]

@NgModule({
  declarations: [ReviewPageMenuComponent],
  imports: [
    CommonModule, IonicModule, RouterModule.forChild(routes)
  ]
})
export class ReviewPageMenuModule { }
