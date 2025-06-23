import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editstory } from './editstory';

describe('Editstory', () => {
  let component: Editstory;
  let fixture: ComponentFixture<Editstory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Editstory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Editstory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
