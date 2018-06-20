import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPuErhComponent } from './about-pu-erh.component';

describe('AboutPuErhComponent', () => {
  let component: AboutPuErhComponent;
  let fixture: ComponentFixture<AboutPuErhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPuErhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPuErhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
