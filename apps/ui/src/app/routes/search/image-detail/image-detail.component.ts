import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ImageData {
  href: string
}

@Component({
  selector: 'starter-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss'],
})
export class ImageDetailComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ImageData) {}

}
