class FooterElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` 
         Crowd Assemble~  Assembling Crowds
         <div >
            <p class="nav-item bg-white">
               <a class="nav-link bg-white" href="#calendar">Calendar</a>
            </p>
            <p class="nav-item bg-white">
               <a class="nav-link bg-white" href="#social">Contact Us</a>
            </p>
         </div>`;
    }
}

customElements.define('footer-element', FooterElement);