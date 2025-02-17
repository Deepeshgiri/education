import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnggtwelveComponent } from './enggtwelve.component';

describe('EnggtwelveComponent', () => {
  let component: EnggtwelveComponent;
  let fixture: ComponentFixture<EnggtwelveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnggtwelveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnggtwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
