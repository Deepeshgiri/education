import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedtwelveComponent } from './medtwelve.component';

describe('MedtwelveComponent', () => {
  let component: MedtwelveComponent;
  let fixture: ComponentFixture<MedtwelveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedtwelveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedtwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
