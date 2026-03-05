import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gastronomy } from './gastronomy';

describe('Gastronomy', () => {
  let component: Gastronomy;
  let fixture: ComponentFixture<Gastronomy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gastronomy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gastronomy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
