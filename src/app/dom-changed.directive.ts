  import { Directive, ElementRef, OnInit } from '@angular/core';

  // watch dom change and fire (dom-changed) event
  @Directive({
    selector: '[watchDomTree]',
  })
  export class DomChangedDirective implements OnInit {
    constructor(private elRef: ElementRef) {}

    ngOnInit() {
      this.registerDomChangedEvent(this.elRef.nativeElement);
    }

    registerDomChangedEvent(el) {
      console.log(el);
      const observer = new MutationObserver((list) => {
        // console.log('trye');
        // console.log(attributes, childList, subtree);

        const evt = new CustomEvent(
          'dom-changed'
          // , {
          //   detail: list,
          //   bubbles: true,
          // }
        );
        el.dispatchEvent(evt);
      });
      const attributes = true;
      const childList = true;
      const subtree = true;
      // console.log(attributes, childList, subtree);
      observer.observe(el, { attributes, childList, subtree });
    }
  }
