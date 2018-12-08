import { Component, OnInit } from '@angular/core';
import { EslintService } from '../eslint.service';

@Component({
  selector: 'app-rules-browser',
  templateUrl: './rules-browser.component.html',
  styleUrls: ['./rules-browser.component.css']
})
export class RulesBrowserComponent implements OnInit {
  rules: Array<Object> = [];

  constructor(private service: EslintService) { }

  ngOnInit() {
    this.getRules();
  }

  getRules(){
    this.service.getRules().subscribe((result: Array<Object>) => {
      this.rules = result;
    });
  }

}
