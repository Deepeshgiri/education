import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundcancellationComponent } from './refundcancellation.component';

describe('RefundcancellationComponent', () => {
  let component: RefundcancellationComponent;
  let fixture: ComponentFixture<RefundcancellationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefundcancellationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefundcancellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
