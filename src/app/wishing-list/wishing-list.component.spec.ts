import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishingListComponent } from './wishing-list.component';

describe('WishingListComponent', () => {
  let component: WishingListComponent;
  let fixture: ComponentFixture<WishingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishingListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
