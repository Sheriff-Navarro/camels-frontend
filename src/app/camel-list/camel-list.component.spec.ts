import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamelListComponent } from './camel-list.component';

describe('CamelListComponent', () => {
  let component: CamelListComponent;
  let fixture: ComponentFixture<CamelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamelListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
