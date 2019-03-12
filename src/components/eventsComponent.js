class EventsComponents extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="card text-center">
      <div class="card-header">
         <ul id="calendars" class="text-left"></ul>
      </div>
      <div class="card-body">
         <ul id="titles" class="card-title"></ul>
         <div id="bodies"></div>
         <a href="index.html" class="btn btn-primary">Back to Events </a>
      </div>
      <div class="card-footer text-muted" id="times" ></div>
   </div>`
      ;
  }
}

customElements.define('events-component', EventsComponents);