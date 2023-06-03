import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortNewsComponent } from './short-news.component';

describe('ShortNewsComponent', () => {
  let component: ShortNewsComponent;
  let fixture: ComponentFixture<ShortNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
