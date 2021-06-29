import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconLastComponent } from './icon-last.component';

describe('IconLastComponent', () => {
  let component: IconLastComponent;
  let fixture: ComponentFixture<IconLastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconLastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconLastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
