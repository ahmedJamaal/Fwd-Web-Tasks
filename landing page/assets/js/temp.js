
const navList = document.querySelector('#nav-links');
const Section = document.querySelectorAll('section');
console.log(Section);

// load all event listners
initNavLink();

function initNavLink() {
  const navLinks = [
    {name:'home',link:'#home'},
    {name:'about',link:'#about'},
    {name:'service',link:'#service'},
    {name:'contact',link:'#contact'}
  ]
  let fragment = new DocumentFragment();
  const ul = document.createElement('ul');
        
  navLinks.forEach(nav =>{
      const li = document.createElement('li');
      var anchor = document.createElement('a');
      anchor.href = nav.link;
      anchor.textContent = nav.name;
      li.appendChild(anchor);
      fragment.appendChild(li);
    })
   /// fragment.appendChild(ul);
    navList.appendChild(fragment);

}
