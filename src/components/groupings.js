export default class Groups extends HTMLElement {
    constructor(){
        super();
    }

   get groupOrgPhoto(){
       return this.getAttribute('groupOrgPhoto');
   }
   set groupOrgPhoto(groupOrgPhoto){
       this.setAttribute('groupOrgPhoto',groupName);
   }
// do for all vari

   static get observerAttributes(){
       return[groupPhoto];
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
        <ul>
            <h3><img src=${this.groupPhoto} alt="organizer photo"class="rounded-circle img-hover"/></h3>
            <button class="btn btn-outline-info my-2 my-sm-0 bg-white" onclick="page.following();"> + Follow</button>
        <ul>
        `;
      this.innerHTML = templateDetails;
    ;}
  }
  