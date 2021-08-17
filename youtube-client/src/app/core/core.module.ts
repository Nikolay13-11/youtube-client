import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HeaderComponent } from './components/header/header.component';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  declarations: [
    ErrorPageComponent,
    HeaderComponent,
    // ButtonSettingComponent,
    // LoginComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
      HeaderComponent,
  ]
})
export class CoreModule { }
