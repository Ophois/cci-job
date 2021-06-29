import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPrevComponent } from './icon-prev.component';

describe('IconPrevComponent', () => {
  let component: IconPrevComponent;
  let fixture: ComponentFixture<IconPrevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconPrevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconPrevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
