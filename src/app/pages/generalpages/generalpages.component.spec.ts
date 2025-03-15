import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralpagesComponent } from './generalpages.component';

describe('GeneralpagesComponent', () => {
  let component: GeneralpagesComponent;
  let fixture: ComponentFixture<GeneralpagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralpagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
