import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopicMarkerComponent } from './topic-marker/topic-marker.component';
import { ServicosEstabelecimentoComponent } from './servicos-estabelecimento/servicos-estabelecimento.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TopicMarkerComponent, ServicosEstabelecimentoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  
  title = 'site-dedalus';
  labelColorIndex=1;
  estabelecimento: string = "lavajato";


  ngOnInit(): void {
    setInterval(() => {
      this.labelColorIndex = (this.labelColorIndex==5) ? this.labelColorIndex=1  : ++this.labelColorIndex; 
      console.log(this.labelColorIndex)
    }, 1500);
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  
  imageClick(estabelecimento:string) {
    this.estabelecimento=estabelecimento;
    console.log(estabelecimento);
  }

}
