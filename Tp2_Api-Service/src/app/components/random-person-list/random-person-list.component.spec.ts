import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomPersonListComponent } from './random-person-list.component';

describe('RandomPersonListComponent', () => {
  let component: RandomPersonListComponent;
  let fixture: ComponentFixture<RandomPersonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomPersonListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomPersonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
