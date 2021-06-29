import { Component, OnInit } from '@angular/core';
import { faFastForward } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-last',
  templateUrl: './icon-last.component.html',
  styleUrls: ['./icon-last.component.scss']
})
export class IconLastComponent implements OnInit {
  public myIcon = faFastForward;
  constructor() { }

  ngOnInit(): void {
  }

}
