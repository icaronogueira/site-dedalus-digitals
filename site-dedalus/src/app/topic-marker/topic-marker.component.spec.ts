import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicMarkerComponent } from './topic-marker.component';

describe('TopicMarkerComponent', () => {
  let component: TopicMarkerComponent;
  let fixture: ComponentFixture<TopicMarkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicMarkerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopicMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
