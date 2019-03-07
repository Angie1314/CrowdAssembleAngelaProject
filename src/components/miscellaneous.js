class Misscell extends HTMLElement {
    connectedCallback () {
      this.innerHTML = `      
    <div class="well bg-white">
      <div class="card text-right bg-white">
        <div class="card-header bg-white">
          <ul id="members" class="text-left bg-white"><h3 class="text-left heading2 bg-white categories">Miscellaneous</h3></ul></div>
          <div class="card-body bg-white" id="photo"><ul id="titles" class="card-title bg-white"></ul></div>
          <nav class="navbar bg-white">
              <ul class="navbar-nav bg-white">
                <li class="nav-item bg-white">
                  <a class="nav-link bg-white" href="#social">Contact Us</a>
                </li>
                <li class="nav-item bg-white">
                  <a class="nav-link bg-white" href="#calendar">Calendar Events</a>
                </li>
                <li class="nav-item bg-white">
                  <a class="nav-link bg-white" href="#info">Page Info</a>
                </li>
              </ul>
            </nav>
            <nav class="navbar navbar-light bg-light">
                <form class="form-inline bg-white">
                  <input class="form-control mr-sm-2 bg-white" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn btn-outline-success my-2 my-sm-0 bg-white" type="submit">Search</button>
                </form>
              </nav>
          <div class="card-footer text-muted heading " id="times" ></div>
      </div>
    </div>
</div>
</div>
</div>`
    ;}
  }
  customElements.define('misscell-an', Misscell );