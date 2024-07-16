import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blok1Component } from './blok1.component';

describe('Blok1Component', () => {
  let component: Blok1Component;
  let fixture: ComponentFixture<Blok1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blok1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blok1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
