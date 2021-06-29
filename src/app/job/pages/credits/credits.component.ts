import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss']
})
export class CreditsComponent implements OnInit {

  public credits: any[];
  constructor() {
    this.credits = [
      {nom: 'Angular', url: 'http://angular.io'},
      {nom: 'Bootstrap', url: 'http://getbootstrap.com'},
      {nom: 'NG Bootstrap', url: 'https://ng-bootstrap.github.io/'},
      {nom: 'NG Font Awesome', url: 'https://www.npmjs.com/package/@fortawesome/angular-fontawesome'},
      {nom: 'Jooble', url: 'https://fr.jooble.org/api'},
      {nom: 'JSON Viewer', url: 'http://jsonviewer.stack.hu/'},
    ]
  }

  ngOnInit(): void {
  }

}
