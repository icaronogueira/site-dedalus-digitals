import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopicMarkerComponent } from './topic-marker/topic-marker.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TopicMarkerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  
  title = 'site-dedalus';
  labelColorIndex=1;

  ngOnInit(): void {
    setInterval(() => {
      this.labelColorIndex = (this.labelColorIndex==5) ? this.labelColorIndex=1  : ++this.labelColorIndex; 
      console.log(this.labelColorIndex)
    }, 2000);
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  
}
