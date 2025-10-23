import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Instructor } from './instructor';

describe('Instructor', () => {
  let component: Instructor;
  let fixture: ComponentFixture<Instructor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Instructor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Instructor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
