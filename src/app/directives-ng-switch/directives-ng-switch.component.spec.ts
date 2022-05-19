import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesNgSwitchComponent } from './directives-ng-switch.component';

describe('DirectivesNgSwitchComponent', () => {
  let component: DirectivesNgSwitchComponent;
  let fixture: ComponentFixture<DirectivesNgSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivesNgSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesNgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
