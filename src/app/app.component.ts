import { Component } from '@angular/core';
import { RulesBrowserComponent } from './rules-browser/rules-browser.component';
import { EslintViewerComponent } from './eslint-viewer/eslint-viewer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
