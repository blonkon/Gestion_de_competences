import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopAjoutCompComponent } from './pop-ajout-comp.component';

describe('PopAjoutCompComponent', () => {
  let component: PopAjoutCompComponent;
  let fixture: ComponentFixture<PopAjoutCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopAjoutCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopAjoutCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
