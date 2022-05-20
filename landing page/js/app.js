
///const main = document.querySelectorAll('.main .container');
const navList = document.querySelector('.site-navbar');
const Sections = document.querySelector('.main .container');
const navToggler = document.querySelector('.nav-toggle');


initNavLink();

//addScrollListener();

function initNavLink() {
  const navLinks = [
    {name:'home',link:'#home'},
    {name:'about',link:'#about'},
    {name:'service',link:'#service'},
    {name:'contact',link:'#contact'}
  ]
  let fragment = new DocumentFragment();
  let fragment2 = new DocumentFragment();
  let ul = document.createElement('ul')
 ul.className ='nav-links'
  var ulList = navList.appendChild(ul);
  navLinks.forEach(nav =>{
      const li = document.createElement('li');
      var anchor = document.createElement('a');
      anchor.href = nav.link;
      ///anchor.className = 'link';
      
      anchor.textContent = nav.name;
      li.appendChild(anchor);
      fragment.appendChild(li);
      
      // for add section depend on navbar
      const section = document.createElement('section');
      section.className= 'section'
      section.id= nav.name
      var h2 = document.createElement('h2');
      h2.textContent= `${nav.name} Section`;
      section.appendChild(h2);
      fragment2.appendChild(section);
    })
   
  ulList.appendChild(fragment);
  Sections.appendChild(fragment2);
  addClickListener();
}

// toggle buttom to show navlist
function toggleClick() {
  const navLinks = document.querySelector('.site-navbar .nav-links');

  navToggler.classList.toggle('toggler-open');
  navLinks.classList.toggle('open');
}

// 

function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}
function addClickListener(){
  console.log('addClickListener...');
  const hyperLinks = document.querySelectorAll(".site-navbar ul a");

  for(var link of hyperLinks) {
    link.addEventListener("click", clickHandler);
   
  }
  // add listener to toggle button
  navToggler.addEventListener('click', toggleClick);
}
var currentLink='';
var currentSection='';
function clickHandler(e) {
  console.log(e);
  ///e.preventDefault();
  const href = this.getAttribute("href");
  currentLink = href;
  currentSection = href.substring(1);
  const active_href = document.querySelector('.site-navbar ul a');
  console.log(active_href);
  
  active_href.className = active_href.className.replace("active", "");
  this.className = "active";
  const All_href = document.querySelectorAll('.site-navbar ul a.active');

  All_href.forEach(nav =>{ 
    if(nav.getAttribute('href') != currentLink ){
      nav.className = nav.className.replace("active", "");
    }
  })

  const section = document.querySelectorAll('.main .container section');
  
  section.forEach(item =>{ 
    var classList =item.classList;
    console.log(classList[0]);
    
    if(item.getAttribute('id') == currentSection){
     
      //item.getAttribute('class') = 'section'
      if(item.getAttribute('class') == 'section') item.className = item.className.replace("", "active ");
      ////this.className = "active";
    }else{
      item.className = item.className.replace("active ", "");
      
    }
  })
  const offsetTop = document.querySelector(href).offsetTop -25;
  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".site-navbar ul li a")
window.onscroll = (event) => {
  //event.preventDefault();
  
  var current = "";
  var currentSection;
  const sectionHeight = 700
  var pageYOffset = window.pageYOffset;
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop- (sectionHeight /2)) {
      current = section.getAttribute("id"); 
      currentSection = section 
    }
  });

    navLi.forEach((link) => {
    if (link.getAttribute("href") == `#${current}` && !link.className !='active') {
      ///link.className = link.className.replace("", "active ");
      link.classList.add('active');
    }else if(link.className =='active'){
      link.classList.remove('active');
    }
  });
};
