class Events extends HTMLElement {
    connectedCallback () {
        var templateDetails=` 
        <div class="container">
        <div class="row">
          <div class="card text-center border border-0">
            <div class="card-header bg-white border border-0">
              <ul id="calendar" class="text-left bg-white border border-0">
                <h3 class="text-center  bg-white border border-0 categories " id="info">Event Organizers</h3>
              </ul>
            </div>
            <div class="card-body bg-white" id="members">
              <ul id="title" class="card-title"></ul>
            </div>
            <div class="card-footer text-muted bg-white border border-0" id="time" >   
              <div class="dropdown  bg-white ">
                <button class="btn btn-primary dropdown-toggle btn btn-light bg-white border border-0" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Change Pages
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="index.html">Home Page</a>
                  <a class="dropdown-item" href="about.html">Group Detail Page</a>
                </div>
              </div>
          </div>
        </div>
      </div> 
  </div>`;
      this.innerHTML = templateDetails;
    ;}
  }
  customElements.define('events-component', Events);