import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaGastosComponent } from './tabela-gastos.component';

describe('TabelaGastosComponent', () => {
  let component: TabelaGastosComponent;
  let fixture: ComponentFixture<TabelaGastosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaGastosComponent]
    });
    fixture = TestBed.createComponent(TabelaGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
