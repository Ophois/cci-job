import { Component, OnInit } from '@angular/core';
import { faStepBackward } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-prev',
  templateUrl: './icon-prev.component.html',
  styleUrls: ['./icon-prev.component.scss']
})
export class IconPrevComponent implements OnInit {
  public myIcon = faStepBackward;
  constructor() { }

  ngOnInit(): void {
  }

}
