import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndivProfileComponent } from './indiv-profile.component';

describe('IndivProfileComponent', () => {
  let component: IndivProfileComponent;
  let fixture: ComponentFixture<IndivProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndivProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndivProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
