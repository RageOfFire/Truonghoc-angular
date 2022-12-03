import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruonghocDetailsComponent } from './truonghoc-details.component';

describe('TruonghocDetailsComponent', () => {
  let component: TruonghocDetailsComponent;
  let fixture: ComponentFixture<TruonghocDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruonghocDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruonghocDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
