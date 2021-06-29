import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDelComponent } from './icon-del.component';

describe('IconDelComponent', () => {
  let component: IconDelComponent;
  let fixture: ComponentFixture<IconDelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconDelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
