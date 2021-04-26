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
                    node.appendChild(childNode);
                });
            });
        }

    }

    attr() {

    }

    addClass() {

    }

    removeClass() {

    }

    children() {

    } 

    parent() {

    }

    find() {

    }

    remove() {

    }
}

module.exports = DOMNodeCollection;