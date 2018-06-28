import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appMyNgClass]'
})
export class MyNgClassDirective implements OnInit{

  @Input('appMyNgClass') cssClass: {[classNamr: string] : any}

  constructor(private elRef: ElementRef) {

  }

  @HostListener('click', ['clickEvent'])
  elementClicked(clickEvent) {
    console.log('NgClass host element clicked', clickEvent);
  }

  ngOnInit() {
    const keys = Object.keys(this.cssClass);
    keys.forEach(key => {
      if (this.cssClass[key]) {
        this.elRef.nativeElement.classList.add(key)
      } else {
        this.elRef.nativeElement.classList.remove(key)
      }
    })
  }



}
