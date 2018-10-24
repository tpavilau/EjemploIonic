import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CalculdoraIPage } from './calculdora-i.page';

const routes: Routes = [
  {
    path: '',
    component: CalculdoraIPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CalculdoraIPage]
})
export class CalculdoraIPageModule {}
