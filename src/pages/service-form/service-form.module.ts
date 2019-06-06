import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceFormPage } from './service-form';

@NgModule({
  declarations: [
    ServiceFormPage,
  ],
  imports: [
    IonicPageModule.forChild(ServiceFormPage),
  ],
})
export class ServiceFormPageModule {}
