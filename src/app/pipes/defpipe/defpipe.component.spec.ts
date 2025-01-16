import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefpipeComponent } from './defpipe.component';

describe('DefpipeComponent', () => {
  let component: DefpipeComponent;
  let fixture: ComponentFixture<DefpipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefpipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
