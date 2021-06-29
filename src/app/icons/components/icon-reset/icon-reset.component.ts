import { Component, OnInit } from '@angular/core';
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-reset',
  templateUrl: './icon-reset.component.html',
  styleUrls: ['./icon-reset.component.scss']
})
export class IconResetComponent implements OnInit {
  public myIcon = faUndoAlt;
  constructor() { }

  ngOnInit(): void {
  }

}
