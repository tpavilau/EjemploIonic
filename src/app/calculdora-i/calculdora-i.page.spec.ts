import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculdoraIPage } from './calculdora-i.page';

describe('CalculdoraIPage', () => {
  let component: CalculdoraIPage;
  let fixture: ComponentFixture<CalculdoraIPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculdoraIPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculdoraIPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
