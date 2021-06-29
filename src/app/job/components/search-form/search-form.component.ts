import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  @Input() init!: any;
  @Output() submitted: EventEmitter<any> = new EventEmitter<any>();
  @Output() reseted: EventEmitter<any> = new EventEmitter<any>();
  public form!: FormGroup;

  constructor(private fb: FormBuilder) {

   }

  ngOnInit(): void {
    this.form = this.fb.group({
      keywords: [this.init.keywords, Validators.required],
      location: [this.init.location, Validators.required],
      radius: [this.init.radius],
      salary: [this.init.salary],
      searchMode: [this.init.searchMode],
      page: [this.init.page]
    });
  }

  onSubmit(): void {
    if(!this.form.value.page) this.form.value.page = 1;
    this.submitted.emit(this.form.value);
  }
  reset(): void {
    this.reseted.emit();
  }

}
