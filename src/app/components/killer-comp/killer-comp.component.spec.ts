import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KillerCompComponent } from './killer-comp.component';

describe('KillerCompComponent', () => {
  let component: KillerCompComponent;
  let fixture: ComponentFixture<KillerCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KillerCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KillerCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
