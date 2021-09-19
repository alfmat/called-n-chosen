import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndivArticleComponent } from './indiv-article.component';

describe('IndivArticleComponent', () => {
  let component: IndivArticleComponent;
  let fixture: ComponentFixture<IndivArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndivArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndivArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
