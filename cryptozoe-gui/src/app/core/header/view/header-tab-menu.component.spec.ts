import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTabMenuComponent } from './header-tab-menu.component';

describe('HeaderTabMenuComponent', () => {
  let component: HeaderTabMenuComponent;
  let fixture: ComponentFixture<HeaderTabMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTabMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTabMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
