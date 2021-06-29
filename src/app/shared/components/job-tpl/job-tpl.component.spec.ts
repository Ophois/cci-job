import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobTplComponent } from './job-tpl.component';

describe('JobTplComponent', () => {
  let component: JobTplComponent;
  let fixture: ComponentFixture<JobTplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobTplComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobTplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
