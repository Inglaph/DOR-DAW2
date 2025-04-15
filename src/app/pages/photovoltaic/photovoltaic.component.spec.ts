import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotovoltaicComponent } from './photovoltaic.component';

describe('PhotovoltaicComponent', () => {
  let component: PhotovoltaicComponent;
  let fixture: ComponentFixture<PhotovoltaicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotovoltaicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotovoltaicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
