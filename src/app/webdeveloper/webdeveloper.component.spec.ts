import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebdeveloperComponent } from './webdeveloper.component';

describe('WebdeveloperComponent', () => {
  let component: WebdeveloperComponent;
  let fixture: ComponentFixture<WebdeveloperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebdeveloperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebdeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
