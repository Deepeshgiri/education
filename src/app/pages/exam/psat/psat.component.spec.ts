import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsatComponent } from './psat.component';

describe('PsatComponent', () => {
  let component: PsatComponent;
  let fixture: ComponentFixture<PsatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
