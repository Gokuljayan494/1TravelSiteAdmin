import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedAgentsComponent } from './activated-agents.component';

describe('ActivatedAgentsComponent', () => {
  let component: ActivatedAgentsComponent;
  let fixture: ComponentFixture<ActivatedAgentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivatedAgentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivatedAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
