import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SParentComponent } from './s-parent.component';

describe('SParentComponent', () => {
  let component: SParentComponent;
  let fixture: ComponentFixture<SParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
