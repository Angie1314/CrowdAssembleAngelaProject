class CategoiresElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` 
      <div class="card text-right bg-white">
        <div class="card-header bg-white">
           <ul id="member" class="text-left bg-white">
              <h3 class="text-left categories bg-white">Categories</h3>
              <div class="spinner-border text-dark bg-white" role="status" id="spin"></div>
           </ul>
        </div>
        <div class="card-body bg-white" id="photos">
           <ul id="title" class="card-title bg-white"></ul>
        </div>
        <div class="card-footer text-muted heading bg-white" id="info" >Categories </div>
     </div>`;
    }
}

customElements.define('group-categoires', CategoiresElement);

