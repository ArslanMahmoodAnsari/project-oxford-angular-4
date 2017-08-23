import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFacesComponent } from './show-faces.component';

describe('ShowFacesComponent', () => {
  let component: ShowFacesComponent;
  let fixture: ComponentFixture<ShowFacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowFacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
