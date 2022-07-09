import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  get testEl() {
    return document.querySelector('#test');
  }
  ngOnInit() {
    setTimeout(() => {
      this.list = ['second'];
    }, 3000);
  }
  list = ['first'];
  handleDomChange(event: any) {
    // this.log(event.detail);
    this.test();
  }
  test() {
    console.log('test');
  }
  log(event: Array<MutationRecord>) {
    console.log('...event', event);
    const html = Array.from(event)
      .map((el: MutationRecord) => {
        const added = el.addedNodes.length ? `added node(s)` : '';
        const removed = el.removedNodes.length ? `removed node(s)` : '';
        const attrs = el.attributeName
          ? `set attribute "${el.attributeName}"`
          : '';

        return `${el.constructor.name} ${el.type} 
        ${added}${removed}${attrs}`;
      })
      .join('\n');
    document
      .querySelector('#log')
      .insertAdjacentHTML('beforeend', `<li>(dom-change) ${html}</li>`);
  }

  // addDomTree() {
  //   this.testEl.insertAdjacentHTML('beforeend', `<div>${new Date()}</div>`);
  // }
  // removeDomTree() {
  //   const last = this.testEl.lastElementChild;
  //   last && last.remove();
  // }
  // changeAttr() {
  //   this.testEl.setAttribute('date', '' + new Date());
  // }
  // changeSubTree() {
  //   const last = this.testEl.lastElementChild;
  //   last && last.insertAdjacentHTML('beforeend', `<i>subtree</i>`);
  // }
}
