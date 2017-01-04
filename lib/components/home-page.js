// var localDB = new PouchDB('mylocaldb');

import "../styles/columns.scss";

export function michael() {
    console.log('michael');
}

class EventCard extends HTMLElement {
    constructor() {
        super(); // always call super() first in the ctor.

        let shadowRoot = this.attachShadow({mode: 'open'});
        const link = document.querySelector('link[id="event-card"]');
        const template = link.import.querySelector('template');
        const instance = template.content.cloneNode(true);
        shadowRoot.appendChild(instance);
    }
};

customElements.define('event-card', EventCard);