import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondTopBarComponent } from './second-top-bar.component';

describe('SecondTopBarComponent', () => {
  let component: SecondTopBarComponent;
  let fixture: ComponentFixture<SecondTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondTopBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
