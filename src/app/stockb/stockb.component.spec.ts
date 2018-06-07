import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockbComponent } from './stockb.component';

describe('StockbComponent', () => {
  let component: StockbComponent;
  let fixture: ComponentFixture<StockbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
