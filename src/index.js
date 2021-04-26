const DOMNodeCollection = require("./dom_node_collection");

window.$l = (arg) => {
    if (arg instanceof HTMLElement) {
        return new DOMNodeCollection([arg]);
    }
};

$l = (selector) => {
    const nodes = document.querySelectorAll(selector)
    return Array.from(nodes);
};