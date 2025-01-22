import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAndFooterComponent } from './header-and-footer.component';

describe('HeaderAndFooterComponent', () => {
  let component: HeaderAndFooterComponent;
  let fixture: ComponentFixture<HeaderAndFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderAndFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderAndFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
