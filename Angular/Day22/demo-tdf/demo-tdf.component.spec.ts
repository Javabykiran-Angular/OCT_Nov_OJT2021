import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTdfComponent } from './demo-tdf.component';

describe('DemoTdfComponent', () => {
  let component: DemoTdfComponent;
  let fixture: ComponentFixture<DemoTdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
