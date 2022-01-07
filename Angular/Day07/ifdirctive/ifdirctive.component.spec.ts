import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfdirctiveComponent } from './ifdirctive.component';

describe('IfdirctiveComponent', () => {
  let component: IfdirctiveComponent;
  let fixture: ComponentFixture<IfdirctiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfdirctiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfdirctiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
