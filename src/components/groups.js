export default class Groups extends HTMLElement {
    constructor(){
        super();
    }

   get groupName(){
       return this.getAttribute('groupName');

   }
   set groupName(groupName){
       this.setAttribute('groupName',groupName);

   }
   
   get groupDescription(){
        return this.getAttribute('groupDescription');

    }
    set groupDescription(groupDescription){
        this.setAttribute('groupDescriprion',groupDescription);

    }

    get groupOrganizer(){
        return this.getAttribute('groupOrganizer');

    }

    set groupOrganizer(groupOrganizer){
        this.setAttribute('groupOrganizer',groupOrganizer);

    }

    get groupOrganizerBio(){
        return this.getAttribute('groupOrganizerBio');

    }

    set groupOrganizerBio(groupOrganizerBio){
        this.setAttribute('groupOrganizerBio',groupOrganizerBio );

    }

    get groupOrganizerPhoto(){
        return this.getAttribute('groupOrganizerPhoto');

    }

    set groupOrganizerPhoto(groupOrganizerPhoto){
        this.setAttribute('groupOrganizerPhoto',groupOrganizerPhoto);

    }

    get groupOrganizerId(){
        return this.getAttribute('groupOrganizerId');

    }

    set groupOrganizerId(groupOrganizerId){
        this.setAttribute('groupOrganizerId',groupOrganizerId);

    }

// do for all vari

   static get observerAttributes(){
       return [groupName,groupDescription,groupOrganizer,groupOrganizerBio,groupOrganizerPhoto,groupOrganizerId];
       //return[variables that I declared, sperated by commas]
   }

   attributeChangedCallback(name , oldVal , newVal){
        switch (name){
            case 'groupName':
            //call all

    }

   }

    connectedCallback () {
         // name the same as geters and setter this.groupName
        var templateDetails=` 
        <div class="border border-primary">

       

        <h5 class="card-title categories">${this.groupName}  
        <button type="button" class="btn btn-outline-light" onclick="page.like();">
        <img src="src/like.png" alt="like photo"class="rounded" title="like group" /></button></h5>
        <div class="class="img-fluid">${this.groupDescription}</div>

    <br/>

        <h2 class=" heading">[ORGANIZER] ${this.groupOrganizer}</h2>

    <br/>

        <h6>[BIO] ${this.groupOrganizerBio}</h6>
        <img src=${this.groupOrganizerPhoto} alt="organizer photo"class="rounded" />
        <button class="btn btn-dark btn-lg btn-block mb-2 mt-2" onclick="page.funcs(${this.groupOrganizerId});">See events</button>`;
      this.innerHTML = templateDetails;
    ;}
  }
  