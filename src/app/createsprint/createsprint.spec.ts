import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createsprint } from './createsprint';

describe('Createsprint', () => {
  let component: Createsprint;
  let fixture: ComponentFixture<Createsprint>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Createsprint]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Createsprint);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
