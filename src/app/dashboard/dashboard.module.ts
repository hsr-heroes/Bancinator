import {NgModule, ModuleWithProviders} from '@angular/core';

import {SharedModule} from "../shared/shared.module";

import {DashboardRoutingModule} from "./dashboard-routing.module";
import {DashboardComponent} from './dashboard.component';
import {HomeComponent, TransactionsComponent} from "./components";
import { TransactionsListComponent } from './components/transactions-list.component';

@NgModule({
  declarations: [
    // Declarations (Components / Directives) used from/within the Module
    DashboardComponent, HomeComponent, TransactionsComponent, TransactionsListComponent
  ],
  imports: [
    // Other Modules to import (imports the exported Components/Directives from the other module)
    DashboardRoutingModule, SharedModule
  ],
  exports: [
    // Components/Directives (or even Modules) to export (available for other modules; and forRoot() )
    DashboardComponent, HomeComponent, TransactionsComponent
  ],
  providers: [
    // DI Providers (Services, Tokens, Factories...), may be instantiated multiple times
  ]
})
export class DashboardModule {
  static forRoot(config?:{}) : ModuleWithProviders {
    return {
      ngModule: DashboardModule,
      providers: [ ]
    };
  }

}
