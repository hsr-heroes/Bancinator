import {NgModule, ModuleWithProviders} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule, FormsModule
  ],
  providers: [ ]
})
export class SharedModule {
  // forRoot() isn't needed here...
}
