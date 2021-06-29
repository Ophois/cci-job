import { Component, OnInit } from '@angular/core';
import { faFastBackward } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-first',
  templateUrl: './icon-first.component.html',
  styleUrls: ['./icon-first.component.scss']
})
export class IconFirstComponent implements OnInit {
  public myIcon = faFastBackward;
  constructor() { }

  ngOnInit(): void {
  }

}
