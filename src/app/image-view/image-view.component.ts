import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css']
})
export class ImageViewComponent implements OnInit {
  @Input() source: string;

  constructor() { 
  }

  ngOnInit(): void {
    console.log("source input", this.source)
    
  }

}
