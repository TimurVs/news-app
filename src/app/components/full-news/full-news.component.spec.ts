import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullNewsComponent } from './full-news.component';

describe('OneNewsComponent', () => {
  let component: FullNewsComponent;
  let fixture: ComponentFixture<FullNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
