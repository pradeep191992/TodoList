import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaCupComponent } from './tea-cup.component';

describe('TeaCupComponent', () => {
  let component: TeaCupComponent;
  let fixture: ComponentFixture<TeaCupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeaCupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaCupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
