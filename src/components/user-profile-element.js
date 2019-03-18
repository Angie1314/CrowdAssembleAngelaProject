class UserProfileElement extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div class="container-fluid text-center">
   <div class="text-muted text-left categories">Crowd Assemble Profile</div>
   <div class="card text-right bg-white">
      <div class="card-header bg-white">
         <form class="text-left" id="contactForm">
            <div class="form-group">
               <label for="name">Name:</label>
               <input class="form-control" id="name" aria-describedby="name"
                  placeholder="Name" required="true">
            </div>
            <div class="form-group">
               <label for="surname">Surname:</label>
               <input class="form-control" id="surname" aria-describedby="suranme"
                  placeholder="Surname" required="true">
            </div>
            <div class="form-group">
               <label for="email">Email:</label>
               <input type="email" class="form-control" id="email"
                  aria-describedby="emailHelp" placeholder="Email" required="true">
            </div>
            <div class="form-group">
               <label for="username">Username:</label>
               <input class="form-control" aria-describedby="Username"
                  placeholder="Username" required="true">
            </div>
            <img id="imageUpload" src="src/images/avatar.png" alt="Upload your
               image" class="rounded-circle img-fluid" required="true" />
            <input type="file" onchange="readURL(this);" />
            <br/>
            <br/>
            <button type="submit" class="btn btn-info">Submit</button>
         </form>
      </div>
   </div>
</div>`;
    }
  }
  
  customElements.define('user-profile-tag', UserProfileElement);