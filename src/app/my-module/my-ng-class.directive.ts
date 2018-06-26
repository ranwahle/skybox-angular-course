import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appMyNgClass]'
})
export class MyNgClassDirective implements OnInit{

  @Input('appMyNgClass') cssClass: {[classNamr: string] : any}

  constructor(private elRef: ElementRef) {

  }

  ngOnInit() {
    const keys = Object.keys(this.cssClass);
    console.log('keys', keys)
    keys.forEach(key => {
      if (this.cssClass[key]) {
        this.elRef.nativeElement.classList.add(key)
      } else {
        this.elRef.nativeElement.classList.remove(key)
      }
    })
  }



}
