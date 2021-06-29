import { Component, OnInit } from '@angular/core';
import { faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-save',
  templateUrl: './icon-save.component.html',
  styleUrls: ['./icon-save.component.scss']
})
export class IconSaveComponent implements OnInit {
  public myIcon = faSave;
  constructor() { }

  ngOnInit(): void {
  }

}
