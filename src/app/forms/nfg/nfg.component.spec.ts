import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NfgComponent } from './nfg.component';

describe('NfgComponent', () => {
  let component: NfgComponent;
  let fixture: ComponentFixture<NfgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NfgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NfgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
