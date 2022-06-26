import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpmConsumerComponent } from './cpm-consumer.component';

describe('CpmConsumerComponent', () => {
  let component: CpmConsumerComponent;
  let fixture: ComponentFixture<CpmConsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpmConsumerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpmConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
