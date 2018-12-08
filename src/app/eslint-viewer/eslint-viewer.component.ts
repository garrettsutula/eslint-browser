import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-eslint-viewer',
  templateUrl: './eslint-viewer.component.html',
  styleUrls: ['./eslint-viewer.component.css']
})
export class EslintViewerComponent {
  @Input() href: string = null;

  constructor() { }

}
