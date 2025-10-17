import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericList } from './generic-list';

describe('GenericList', () => {
  let component: GenericList;
  let fixture: ComponentFixture<GenericList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenericList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
