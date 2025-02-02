import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomvalidationComponent } from './customvalidation.component';

describe('CustomvalidationComponent', () => {
  let component: CustomvalidationComponent;
  let fixture: ComponentFixture<CustomvalidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomvalidationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
