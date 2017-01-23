class MainNavigation extends HTMLElement {
    constructor() {
        super(); // always call super() first in the ctor.

        let shadowRoot = this.attachShadow({mode: 'open'});
        const link = document.querySelector('link[id="main-navigation"]');
        const template = link.import.querySelector('template');
        const instance = template.content.cloneNode(true);
        shadowRoot.appendChild(instance);
    }
};
customElements.define('main-navigation', MainNavigation);
