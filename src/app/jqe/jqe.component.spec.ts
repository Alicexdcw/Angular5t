import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JqeComponent } from './jqe.component';

describe('JqeComponent', () => {
  let component: JqeComponent;
  let fixture: ComponentFixture<JqeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JqeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JqeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
