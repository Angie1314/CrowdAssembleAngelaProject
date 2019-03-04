class cardItems extends HTMLElement {
    connectedCallback () {
      this.innerHTML = `
      `
    ;}
  }
  customElements.define('cards', Cards);