import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverInteract]',
})
export class HoverInteract {
  constructor(private el: ElementRef) {}

  @Input() inputTransform!: string;

  @HostListener('mouseover') onMouseOver() {
    this.changeBgColor(this.inputTransform);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBgColor('');
  }

  private changeBgColor(trans: string) {
    this.el.nativeElement.style.transform = trans;
  }

}
