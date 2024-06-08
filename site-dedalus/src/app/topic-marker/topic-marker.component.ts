import { Component, Input } from '@angular/core';

@Component({
  selector: 'topic-marker',
  standalone: true,
  imports: [],
  templateUrl: './topic-marker.component.html',
  styleUrl: './topic-marker.component.css'
})
export class TopicMarkerComponent {
  @Input() topico: string = "";

  constructor() {

  }
}
