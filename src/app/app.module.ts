import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgMaterialModule } from './ng-material/ng-material.module';
import { AppComponent } from './app.component';
import { RulesBrowserComponent } from './rules-browser/rules-browser.component';
import { EslintViewerComponent } from './eslint-viewer/eslint-viewer.component';
import { SafePipe } from './safe-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    RulesBrowserComponent,
    EslintViewerComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
