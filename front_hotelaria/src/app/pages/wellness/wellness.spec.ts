import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wellness } from './wellness';

describe('Wellness', () => {
  let component: Wellness;
  let fixture: ComponentFixture<Wellness>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Wellness]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Wellness);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
