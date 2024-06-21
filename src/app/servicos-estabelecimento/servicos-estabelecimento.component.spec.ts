import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosEstabelecimentoComponent } from './servicos-estabelecimento.component';

describe('ServicosEstabelecimentoComponent', () => {
  let component: ServicosEstabelecimentoComponent;
  let fixture: ComponentFixture<ServicosEstabelecimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicosEstabelecimentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicosEstabelecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
