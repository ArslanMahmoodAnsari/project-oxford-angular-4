import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindSimilarFaceComponent } from './find-similar-face.component';

describe('FindSimilarFaceComponent', () => {
  let component: FindSimilarFaceComponent;
  let fixture: ComponentFixture<FindSimilarFaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindSimilarFaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindSimilarFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
