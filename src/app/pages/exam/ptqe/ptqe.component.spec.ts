import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtqeComponent } from './ptqe.component';

describe('PtqeComponent', () => {
  let component: PtqeComponent;
  let fixture: ComponentFixture<PtqeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PtqeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PtqeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
