import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTrayComponent } from './new-tray.component';

describe('NewTrayComponent', () => {
  let component: NewTrayComponent;
  let fixture: ComponentFixture<NewTrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
