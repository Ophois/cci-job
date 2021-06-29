import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconFirstComponent } from './icon-first.component';

describe('IconFirstComponent', () => {
  let component: IconFirstComponent;
  let fixture: ComponentFixture<IconFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
