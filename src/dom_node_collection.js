class DOMNodeCollection {
    constructor(htmlEleArr) {
        this.htmlEleArr = htmlEleArr;
    }

    html(string) {
        if (typeof string === "string") {
            this.each( (node) => {
                node.innerHTML = string;
            });
        } else if (this.htmlEleArr.length > 0) {
            return this.htmlEleArr[0].innerHTML;
        }
    }

    empty() {
        this.html('');
    }

    append(child) {
        if (this.htmlEleArr.length === 0) {
            return;
        } 

        if (typeof child === "string") {
            this.each((node) => {
                node.innerHTML += child;
            });
        } else if (child instanceof DOMNodeCollection) {
            this.each ((node) => {
                child.each ((childNode) => {
                    node.appendChild(childNode.cloneNode(true));
                });
            });
        }

    }

    attr(key, value) {
        if (typeof value === "string") {
            this.each(node => node.setAttribute(key, value));
        } else {
            return this.htmlEleArr[0].getAttribute(key);
        }
    }

    addClass(nclass) {
        this.each(node => node.classList.add(nclass));
    }

    removeClass(oldClass) {
        this.each(node => node.classList.remove(oldClass));
    }

    children() {
        let res = [];

        this.each(node => {
            let c = node.children;
            res = res.concat(c);
        });

        return new DOMNodeCollection(res);
    } 

    parent() {
        let res = [];

        this.each(({parentNode}) => {
            if (!parentNode.visited) {
                res.push(parentNode);
                parentNode.visited = true;
            }
        });

        return new DOMNodeCollection(res);
    }

    find(selector) {
        let res = [];

        this.each((node) => {
            let nodeList = node.querySelectorAll(selector);
            res = res.concat(nodeList);
        })

        return new DOMNodeCollection(res);
    }

    remove() {
        this.each(node => node.parentNode.removeChild(node));
    }

    on(event, callback) {
        this.each((node) => {
            node.addEventListener(event, callback);
            node.setAttribute("cb", callback)
        })
    }

    off(event) {
        this.each(node => {
            
        })
    }
}

module.exports = DOMNodeCollection;