import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Storycard } from './storycard';

describe('Storycard', () => {
  let component: Storycard;
  let fixture: ComponentFixture<Storycard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Storycard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Storycard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
