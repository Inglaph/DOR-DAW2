import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicationsSectionComponent } from './aplications-section.component';

describe('AplicationsSectionComponent', () => {
  let component: AplicationsSectionComponent;
  let fixture: ComponentFixture<AplicationsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AplicationsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AplicationsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
