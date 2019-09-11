import { createComponent, appendToParent, createChildComponent, pipe, mount } from "./../framework/bober";

const rootComponent = pipe(
  createComponent,   
  createChildComponent('header'),
  createChildComponent('footer'),
  pipe(
    createComponent,
    createChildComponent('upperPart'),
    createChildComponent('lowerPart'),
    appendToParent
  )('body'),
  )('root');

mount(rootComponent)(document.body)

console.log('root', rootComponent);