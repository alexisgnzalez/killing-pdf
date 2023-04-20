import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KillerCotainerComponent } from './killer-cotainer.component';

describe('KillerCotainerComponent', () => {
  let component: KillerCotainerComponent;
  let fixture: ComponentFixture<KillerCotainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KillerCotainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KillerCotainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
