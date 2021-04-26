const DOMNodeCollection = require("./dom_node_collection");

window.$1 = arg => {
    
};

const $l = (selector) => {
    const nodes = document.querySelectorAll(selector);

    return Array.from(nodes);
};