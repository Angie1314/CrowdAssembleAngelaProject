class Footer extends HTMLElement {
    connectedCallback () {
        var templateDetails=` 
        Crowd Assemble~  Assembling Crowds
            <div >
                <p class="nav-item bg-white">
                    <a class="nav-link bg-white" href="#calendar">Calendar</a>
                </p>
                <p class="nav-item bg-white">
                    <a class="nav-link bg-white" href="#social">Contact Us</a>
                </p>
            </div>`;
      this.innerHTML = templateDetails;
    ;}
  }
  customElements.define('footer-tag', Footer );