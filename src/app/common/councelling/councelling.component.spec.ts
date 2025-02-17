import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouncellingComponent } from './councelling.component';

describe('CouncellingComponent', () => {
  let component: CouncellingComponent;
  let fixture: ComponentFixture<CouncellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CouncellingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouncellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
