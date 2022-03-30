import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotocvComponent } from './fotocv.component';

describe('FotocvComponent', () => {
  let component: FotocvComponent;
  let fixture: ComponentFixture<FotocvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotocvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotocvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
