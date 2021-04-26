const DOMNodeCollection = require("./dom_node_collection");

window.$l = (arg) => {
    
    switch (typeof arg) {
        case "string":
            return getDOMNodes(arg);
        case "object":
            if (arg instanceof HTMLElement) {
                return new DOMNodeCollection([arg]);
            }
    }
};

getDOMNodes = (selector) => {
    const nodes = document.querySelectorAll(selector)
    return Array.from(nodes);
};
