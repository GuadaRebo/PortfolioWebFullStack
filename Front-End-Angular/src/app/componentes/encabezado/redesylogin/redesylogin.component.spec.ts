import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesyloginComponent } from './redesylogin.component';

describe('RedesyloginComponent', () => {
  let component: RedesyloginComponent;
  let fixture: ComponentFixture<RedesyloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedesyloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedesyloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
