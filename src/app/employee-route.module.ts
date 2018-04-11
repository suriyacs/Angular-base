import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ROUTER_LIST } from './route-list';

@NgModule({
  exports:[
      RouterModule
  ],
  imports: [
      RouterModule.forRoot(ROUTER_LIST)
  ],
  declarations: []
})
export class EmployeeRouteModule { }
