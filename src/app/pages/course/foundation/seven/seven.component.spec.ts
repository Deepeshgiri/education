import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenComponent } from './seven.component';

describe('SevenComponent', () => {
  let component: SevenComponent;
  let fixture: ComponentFixture<SevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SevenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
