import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySwitchComponent } from './my-switch.component';

describe('MySwitchComponent', () => {
  let component: MySwitchComponent;
  let fixture: ComponentFixture<MySwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
