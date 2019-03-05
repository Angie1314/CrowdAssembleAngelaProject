class Chat extends HTMLElement {
    connectedCallback () {
        let chatTemplate= `<br/><br/>
        <button type="button" class="btn border border-0 text-left" data-toggle="modal" data-target="#exampleModal">
        <p class="heading2" ><img src="src/f2.png" alt="foxbot icon" class="img-fluid img-circle" /> FQA Chat </p>
    </button>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby
         ="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title heading2" id="exampleModalLabel"><img src="src/foxs.png" alt="foxbot icon" class="img-fluid img-circle" />Crowd Chat</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <h1 class="heading2">Ask questions</h1>
            <form>
                <div class="form-group" method="scripts/index.js">
                    <label for="exampleInputEmail1" class="text-left">Message</label>
                    <input type="email" class="form-control" id="tf" aria-describedby="emailHelp" placeholder="Ask Question">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1"><img src="src/foxs.png" alt="foxbot icon" class="img-fluid img-circle" />Bot Response</label>
                    <textarea class="form-control" rows="5" id="comment" ></textarea>
                    </div>
                </form>
                <div class="modal-footer">
                    <button type="button" class="btn btn-dark" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-dark" onclick="page.responseFunc(${cals.f})>submit</button>
                </div>
        </div>
    </div>
  </div>
  </div>`;
      this.innerHTML = chatTemplate;}
  }
  customElements.define('chat-chat', Chat);