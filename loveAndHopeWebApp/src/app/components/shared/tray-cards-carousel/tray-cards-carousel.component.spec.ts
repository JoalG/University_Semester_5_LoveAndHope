import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrayCardsCarouselComponent } from './tray-cards-carousel.component';

describe('TrayCardsCarouselComponent', () => {
  let component: TrayCardsCarouselComponent;
  let fixture: ComponentFixture<TrayCardsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrayCardsCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrayCardsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
