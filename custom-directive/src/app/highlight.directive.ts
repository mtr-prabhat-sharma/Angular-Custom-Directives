import { Directive, ElementRef, HostListener, input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('input', ['$event']) 
  onInputChanges(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    if(Number(inputValue) <= 10) {
      this.renderer.setStyle(this.el.nativeElement, 'border','2px solid green')
    }else {
      this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid red')
    }
  }

}
