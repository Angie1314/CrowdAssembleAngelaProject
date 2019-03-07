class GroupDetails extends HTMLElement {
    connectedCallback () {
        var templateDetails=` 
    <div class="card  bg-white ">
        <div class="card-header bg-white"><p class="categories  bg-white ">Group Details </p></div>
            <div class="card-body bg-white">
                <div id="groups" class="text-center">
                    <div class="spinner-border text-dark" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
      </div>`;
      this.innerHTML = templateDetails;
    ;}
  }
  customElements.define('group-details', GroupDetails );