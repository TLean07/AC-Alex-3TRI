import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DecryptPage } from './decrypt.page';

describe('DecryptPage', () => {
  let component: DecryptPage;
  let fixture: ComponentFixture<DecryptPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DecryptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
