import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ErrorPageComponent } from './components/error-page/error-page.component';
import {
    ButtonSettingComponent
} from './components/header/components/button-setting/button-setting.component';
import { LoginComponent } from './components/header/components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { CoreRoutingModule } from './core-routing.module';
import { InputSearchService } from './services/input-search.service';

@NgModule({
  declarations: [
    ErrorPageComponent,
    ButtonSettingComponent,
    LoginComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
      HeaderComponent,
  ],
  providers: [
    InputSearchService
  ]
})
export class CoreModule { }
