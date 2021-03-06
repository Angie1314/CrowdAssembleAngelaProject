class SocialTagElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="text-left"><img src="src/images/fox.png" class="text-left img-fluid" alt="Responsive image"></div>
    <p class="logo text-left"> Crowd Assemble</p>
    <p class="text-right fixed-top ">
       <a href="https://www.facebook.com/meetup/">
       <img class="img-fluid" alt="Facebook logo" src="src/images/fb.png" /></a>
       <a href="https://www.instagram.com/meetup/?hl=en">
       <img class="img-fluid" alt="instagram logo" src="src/images/instagram.png" /></a>
       <a href="https://twitter.com/Meetup?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
       <img class="img-fluid" alt="insta logo" src="src/images/twitter.png" /></a>`;
  }
}

customElements.define('social-tag', SocialTagElement);