class Groups extends HTMLElement {
    connectedCallback () {
        var templateDetails=` 
        <div class="border border-primary">
        <h5 class="card-title categories">${group.name}  
        <button type="button" class="btn btn-outline-light" onclick="page.like();">
        <img src="src/like.png" alt="like photo"class="rounded" title="like group" /></button></h5>
    <div class="class="img-fluid">${group.description}</div>

    <br/>

        <h2 class=" heading">[ORGANIZER] ${group.organizer.name}</h2>

    <br/>

        <h6>[BIO] ${group.organizer.bio}</h6>
        <img src=${group.organizer.photo.photo_link} alt="organizer photo"class="rounded" />
        <button class="btn btn-dark btn-lg btn-block mb-2 mt-2" onclick="page.funcs(${group.id});">See events</button>`;
      this.innerHTML = templateDetails;
    ;}
  }
  