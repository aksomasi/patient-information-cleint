import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpmProducerComponent } from './cpm-producer.component';

describe('CpmProducerComponent', () => {
  let component: CpmProducerComponent;
  let fixture: ComponentFixture<CpmProducerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpmProducerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpmProducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
