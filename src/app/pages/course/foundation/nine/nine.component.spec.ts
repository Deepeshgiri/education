import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NineComponent } from './nine.component';

describe('NineComponent', () => {
  let component: NineComponent;
  let fixture: ComponentFixture<NineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
