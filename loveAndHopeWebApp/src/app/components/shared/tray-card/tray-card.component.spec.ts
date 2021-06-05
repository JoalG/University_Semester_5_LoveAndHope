import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrayCardComponent } from './tray-card.component';

describe('TrayCardComponent', () => {
  let component: TrayCardComponent;
  let fixture: ComponentFixture<TrayCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrayCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
