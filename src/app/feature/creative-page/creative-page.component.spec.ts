import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativePageComponent } from './creative-page.component';

describe('CreativePageComponent', () => {
  let component: CreativePageComponent;
  let fixture: ComponentFixture<CreativePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreativePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreativePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
