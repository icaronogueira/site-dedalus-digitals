import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-servicos-estabelecimento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicos-estabelecimento.component.html',
  styleUrl: './servicos-estabelecimento.component.css',
  
})

export class ServicosEstabelecimentoComponent {
  @Input() estabelecimento: string = "";
}
