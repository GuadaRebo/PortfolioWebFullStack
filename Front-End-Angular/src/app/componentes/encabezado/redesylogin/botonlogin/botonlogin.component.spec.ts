import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonloginComponent } from './botonlogin.component';

describe('BotonloginComponent', () => {
  let component: BotonloginComponent;
  let fixture: ComponentFixture<BotonloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
