import { AfterViewInit, Component, ElementRef, Inject, OnDestroy, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';


export interface ImageData {
  href: string
}

@Component({
  selector: 'starter-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['../../../../../../../node_modules/keen-slider/keen-slider.css','./image-detail.component.scss'],
})
export class ImageDetailComponent implements AfterViewInit, OnDestroy {
  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>

  currentSlide = 0
  dotHelper: Array<number> = []
  slider!: KeenSliderInstance

  constructor(@Inject(MAT_DIALOG_DATA) public data: ImageData) {}


  ngAfterViewInit() {
    setTimeout(() => {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        initial: this.currentSlide,
        slideChanged: (s) => {
          this.currentSlide = s.track.details.rel
        },
      })
      this.dotHelper = [
        ...Array(this.slider.track.details.slides.length).keys(),
      ]
    })
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }
}
