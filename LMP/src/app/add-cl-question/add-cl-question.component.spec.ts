import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClQuestionComponent } from './add-cl-question.component';

describe('AddClQuestionComponent', () => {
  let component: AddClQuestionComponent;
  let fixture: ComponentFixture<AddClQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
