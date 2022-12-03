import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruonghocListComponent } from './truonghoc-list.component';

describe('TruonghocListComponent', () => {
  let component: TruonghocListComponent;
  let fixture: ComponentFixture<TruonghocListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruonghocListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruonghocListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
