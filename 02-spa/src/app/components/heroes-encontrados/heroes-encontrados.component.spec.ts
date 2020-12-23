import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesEncontradosComponent } from './heroes-encontrados.component';

describe('HeroesEncontradosComponent', () => {
  let component: HeroesEncontradosComponent;
  let fixture: ComponentFixture<HeroesEncontradosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesEncontradosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesEncontradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
