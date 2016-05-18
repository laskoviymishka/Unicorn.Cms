import { Directive, ElementRef, OnInit } from '@angular/core';

declare var jQuery: any;

@Directive({
  selector: '[bmdBoot]'
})
export class BmdBootDirective implements OnInit {

  constructor(private _element: ElementRef) { }

  ngOnInit(): void {
    jQuery(this._element).bootstrapMaterialDesign();
  }
}
