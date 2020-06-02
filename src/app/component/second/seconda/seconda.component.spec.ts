import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaComponent } from './seconda.component';

describe('SecondaComponent', () => {
  let component: SecondaComponent;
  let fixture: ComponentFixture<SecondaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
