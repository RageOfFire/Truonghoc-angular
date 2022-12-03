import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTruonghocComponent } from './add-truonghoc.component';

describe('AddTruonghocComponent', () => {
  let component: AddTruonghocComponent;
  let fixture: ComponentFixture<AddTruonghocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTruonghocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTruonghocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
