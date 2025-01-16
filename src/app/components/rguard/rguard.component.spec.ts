import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RguardComponent } from './rguard.component';

describe('RguardComponent', () => {
  let component: RguardComponent;
  let fixture: ComponentFixture<RguardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RguardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RguardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
