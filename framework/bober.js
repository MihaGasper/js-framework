// pipe: [f] -> a -> b
export const pipe = (...functions) => value =>
  functions.reduce((acc, fn) => {
    return fn(acc);
  }, value);

// createDomNode: String -> DomNode
export const createDomNode = tagName => document.createElement(tagName);

// *addClass: String -> DomNode -> DomNode
export const addClass = className => domNode => {
  domNode.classList.add(className);
  return domNode;
} 

// createComponent: String -> Component
export const createComponent = name => {
  return {
    name,
    children: [],
    domNode: pipe(createDomNode, addClass(name))('div')
  };
};

// addChild: Component -> Component -> Component
export const appendToParent = component => parentComponent => {
  return {
    ...parentComponent,
    children: [...parentComponent.children, component]
  };
};

// createChild: String -> Component -> Component
export const createChildComponent = pipe(createComponent, appendToParent);

// *mount: Component -> DomNode -> a
export const mount = component => domNode => {
  domNode.append(component.domNode);
  return 'Mounted';
}
