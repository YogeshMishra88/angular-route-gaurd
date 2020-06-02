import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondbComponent } from './secondb.component';

describe('SecondbComponent', () => {
  let component: SecondbComponent;
  let fixture: ComponentFixture<SecondbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
