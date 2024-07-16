import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blok2Component } from './blok2.component';

describe('Blok2Component', () => {
  let component: Blok2Component;
  let fixture: ComponentFixture<Blok2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blok2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blok2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
