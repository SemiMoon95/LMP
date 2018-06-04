import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClComponent } from './add-cl.component';

describe('AddClComponent', () => {
  let component: AddClComponent;
  let fixture: ComponentFixture<AddClComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
