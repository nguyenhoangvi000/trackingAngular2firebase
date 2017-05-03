import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogchatComponent } from './dialogchat.component';

describe('DialogchatComponent', () => {
  let component: DialogchatComponent;
  let fixture: ComponentFixture<DialogchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
