import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Major } from './major';

describe('Major', () => {
  let component: Major;
  let fixture: ComponentFixture<Major>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Major]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Major);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
