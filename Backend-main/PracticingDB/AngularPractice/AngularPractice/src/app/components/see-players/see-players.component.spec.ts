import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeePlayersComponent } from './see-players.component';

describe('SeePlayersComponent', () => {
  let component: SeePlayersComponent;
  let fixture: ComponentFixture<SeePlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeePlayersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeePlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
