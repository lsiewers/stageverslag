import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroEndComponent } from './intro-end.component';

describe('IntroEndComponent', () => {
  let component: IntroEndComponent;
  let fixture: ComponentFixture<IntroEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
