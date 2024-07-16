import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blok3Component } from './blok3.component';

describe('Blok3Component', () => {
  let component: Blok3Component;
  let fixture: ComponentFixture<Blok3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blok3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blok3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
