import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDstComponent } from './about-dst.component';

describe('AboutDstComponent', () => {
  let component: AboutDstComponent;
  let fixture: ComponentFixture<AboutDstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutDstComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutDstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
