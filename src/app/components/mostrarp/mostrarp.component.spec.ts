import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarpComponent } from './mostrarp.component';

describe('MostrarpComponent', () => {
  let component: MostrarpComponent;
  let fixture: ComponentFixture<MostrarpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
