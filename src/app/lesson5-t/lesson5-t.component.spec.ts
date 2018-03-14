import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson5TComponent } from './lesson5-t.component';

describe('Lesson5TComponent', () => {
  let component: Lesson5TComponent;
  let fixture: ComponentFixture<Lesson5TComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson5TComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson5TComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
