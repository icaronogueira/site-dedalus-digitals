import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'topic-marker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topic-marker.component.html',
  styleUrl: './topic-marker.component.css'
})
export class TopicMarkerComponent {
  @Input() topico: string = "";
  @Input() textcolor: string = "";

}
