import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormmodalACComponent } from './formmodal-ac.component';

describe('FormmodalACComponent', () => {
  let component: FormmodalACComponent;
  let fixture: ComponentFixture<FormmodalACComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormmodalACComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormmodalACComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
