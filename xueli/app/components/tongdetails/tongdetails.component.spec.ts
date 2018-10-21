import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TongdetailsComponent } from './tongdetails.component';

describe('TongdetailsComponent', () => {
  let component: TongdetailsComponent;
  let fixture: ComponentFixture<TongdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TongdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TongdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
