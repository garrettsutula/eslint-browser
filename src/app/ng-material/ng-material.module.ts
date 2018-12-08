import { NgModule } from '@angular/core';
import {MatButtonModule, MatToolbarModule, MatExpansionModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatExpansionModule],
  exports: [MatButtonModule, MatToolbarModule, MatExpansionModule],
})
export class NgMaterialModule { }
