import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertBar } from './alert-bar';

describe('AlertBar', () => {
  let component: AlertBar;
  let fixture: ComponentFixture<AlertBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertBar],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
