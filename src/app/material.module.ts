import {NgModule} from '@angular/core';
import {MatBadgeModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  imports : [MatBadgeModule, MatButtonModule],
  exports: [MatBadgeModule, MatButtonModule]
})
export class MaterialModule {

}

