import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfaceComponent } from './addface.component';

describe('AddfaceComponent', () => {
  let component: AddfaceComponent;
  let fixture: ComponentFixture<AddfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
