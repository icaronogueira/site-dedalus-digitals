import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopicMarkerComponent } from './topic-marker/topic-marker.component';
import { ServicosEstabelecimentoComponent } from './servicos-estabelecimento/servicos-estabelecimento.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';


interface FaqItem {
  question: string;
  answer: string;
  open: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, 
    TopicMarkerComponent, ServicosEstabelecimentoComponent,
    NgxMaskDirective, NgxMaskPipe
],
  providers: [provideNgxMask()],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  
  title = 'site-dedalus';
  labelColorIndex=1;
  estabelecimento: string = "lavajato";

  faqList: FaqItem[] = [
    {
      question: 'O que é aprendizado de máquina e como pode beneficar minha empresa?',
      answer: 'O aprendizado de máquina é uma subárea da inteligência artificial que envolve o uso de algoritmos e modelos estatísticos '+
      'para que sistemas de computadores possam realizar tarefas sem serem explicitamente programados para isso. '+
      'Ele pode beneficiar sua empresa em várias áreas, como previsão de demanda, otimização de processos, personalização de '+
      'marketing, detecção de fraudes e muito mais, aumentando a eficiência e a competitividade',
      open: false
    },
    {
      question: 'Como seria o processo de desenvolvimento de um modelo de aprendizado de máquina em minha empresa?',
      answer: 'O processo envolve várias etapas, como: reuniões iniciais, coleta e análise de dados, desenvolvimento dos modelos previsivos, '+
      'reuniões de acompanhamento e entrega final. Para mais detalhes, consulta a seção "Nossa operação".',
      open: false
    },
    {
      question: 'Minha empresa precisa ter uma equipe de TI especializada para usar os modelos de aprendizado de máquina?',
      answer: 'Não necessariamente. Nossa equipe oferece suporte completo desde o desenvolvimento até a implementação dos modelos. '+
      'Oferecemos treinamentos e suporte técnico para garantir que sua equipe consiga operar os modelos de forma eficiente, '+
      'mesmo sem conhecimentos avançados em TI.',
      open: false
    },
    {
      question: 'Quanto tempo leva para desenvolver e implementar um modelo de aprendizado de máquina?',
      answer: 'O tempo necessário varia conforme a complexidade do projeto e a quantidade de dados disponíveis. '+
      'Em geral, o desenvolvimento pode levar de algumas semanas a alguns meses. Durante a reunião inicial, forneceremos uma '+
      'estimativa mais precisa com base nas suas necessidades específicas. ',
      open: false
    },
    {
      question: 'É necessário ter uma grande quantidade de dados para utilizar aprendizado de máquina?',
      answer: 'Ter uma quantidade significativa de dados pode melhorar a eficácia dos modelos, mas não é estritamente necessário. '+
      'Dependendo do problema, podemos trabalhar com dados menores e ainda assim obter resultados valiosos. Em alguns casos, técnicas de aumento '+
      'de dados ou utilização de dados sintéticos podem ser aplicadas.',
      open: false
    },
    {
      question: 'Como vocês garantem a segurança e a privacidade dos dados da minha empresa?',
      answer: 'Levamos a segurança e a privacidade dos dados muito a sério.  Seguimos as melhores práticas de segurança '+
      ' da informação. Além disso, assinamos acordos de confidencialidade para proteger seus dados e garantir '+
      'que eles sejam utilizados apenas para os fins acordados.',
      open: false
    },
    {
      question: 'Vocês oferecem suporte e manutenção após a entrega do modelo?',
      answer: 'Sim, oferecemos suporte contínuo e serviços de manutenção para garantir que o modelo continue operando eficientemente e que '+
      'quaisquer problemas sejam rapidamente resolvidos. Nosso objetivo é garantir que sua empresa obtenha o máximo benefício do modelo de '+
      'aprendizado de máquina.',
      open: false
    },
    {
      question: 'Minha empresa pode fazer alterações no modelo após a entrega?',
      answer: 'Sim, entendemos que as necessidades empresariais podem mudar com o tempo. Oferecemos serviços de ajuste e re-treinamento do modelo '+
      'para garantir que ele continue atendendo às suas necessidades específicas. Estamos sempre disponíveis para discutir quaisquer alterações '+
      'necessárias',
      open: false
    },
    {
      question: 'Como posso começar a trabalhar com a sua empresa?',
      answer: 'Você pode entrar em contato conosco através do email dedalusbi@gmail.com. '+
      'Agendaremos uma reunião inicial para discutir suas necessidades e como podemos ajudá-lo a alcançar seus objetivos através '+
      'de soluções de aprendizado de máquina.',
      open: false
    }
  ]


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

  toggleAccordion(item: FaqItem) {
    item.open = !item.open;
  }

}
