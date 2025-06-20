import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Displaysprint } from './displaysprint';

describe('Displaysprint', () => {
  let component: Displaysprint;
  let fixture: ComponentFixture<Displaysprint>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Displaysprint]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Displaysprint);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
