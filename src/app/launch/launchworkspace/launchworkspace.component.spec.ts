import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchworkspaceComponent } from './launchworkspace.component';

describe('LaunchworkspaceComponent', () => {
  let component: LaunchworkspaceComponent;
  let fixture: ComponentFixture<LaunchworkspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchworkspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchworkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
