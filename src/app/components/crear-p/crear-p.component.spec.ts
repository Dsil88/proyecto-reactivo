import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPComponent } from './crear-p.component';

describe('CrearPComponent', () => {
  let component: CrearPComponent;
  let fixture: ComponentFixture<CrearPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
