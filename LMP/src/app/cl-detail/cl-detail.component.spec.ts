import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClDetailComponent } from './cl-detail.component';

describe('ClDetailComponent', () => {
  let component: ClDetailComponent;
  let fixture: ComponentFixture<ClDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
