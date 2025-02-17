import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnggelevenComponent } from './enggeleven.component';

describe('EnggelevenComponent', () => {
  let component: EnggelevenComponent;
  let fixture: ComponentFixture<EnggelevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnggelevenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnggelevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
