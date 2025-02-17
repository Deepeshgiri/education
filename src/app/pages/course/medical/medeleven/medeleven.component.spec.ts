import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedelevenComponent } from './medeleven.component';

describe('MedelevenComponent', () => {
  let component: MedelevenComponent;
  let fixture: ComponentFixture<MedelevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedelevenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedelevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
