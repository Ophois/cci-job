import { Component, OnInit } from '@angular/core';
import { faStepForward, faStethoscope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-next',
  templateUrl: './icon-next.component.html',
  styleUrls: ['./icon-next.component.scss']
})
export class IconNextComponent implements OnInit {

  constructor() { }
  public myIcon = faStepForward;
  ngOnInit(): void {
  }

}
