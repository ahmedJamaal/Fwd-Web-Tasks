
///const main = document.querySelectorAll('.main .container');
const navList = document.querySelector('.site-navbar');
const Sections = document.querySelector('.main .container');



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
// 
function addClickListener(){
  console.log('addClickListener...');
  const hyperLinks = document.querySelectorAll(".site-navbar ul a");

  for(var link of hyperLinks) {
    link.addEventListener("click", clickHandler);
   
  }
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
var main = document.querySelector('section');
window.addEventListener('scroll', (event) => {
  event.preventDefault();
  nav = document.getElementById('nav-links');
  yPos = window.scrollTop;
  var isThereClass 
 console.log(yPos);
 const active_href = document.querySelectorAll('.site-navbar ul a');



 ///const All_href = document.querySelectorAll('.site-navbar ul a.active');

 const links = document.querySelectorAll('.site-navbar ul a');
   if(yPos >= 720 && yPos <1400 ){
    console.log(yPos);
    const element = document.querySelector('[href^="#home"]');
    console.log('home');  
    console.log(element);  

      element.className = element.className.replace("", "active");
  
    }else if (yPos >= 1400 && yPos < 2120){
      console.log('about');
      const element = document.querySelector('[href^="#about"]');
      if(element.className != 'active')
      element.className = element.className.replace("", "active");
      else element.className = element.className.replace("active", "");
    }
    else if (yPos >=2121 && yPos <2800){
      console.log('service');
      const element = document.querySelector('[href^="#service"]');
      if(element.className != 'active')
      element.className = element.className.replace("", "active");
      else element.className = element.className.replace("active", "");
    }
    else if (yPos >= 2800){
      console.log('contact');
      const element = document.querySelector('[href^="#contact"]');
      if(element.className != 'active')
      element.className = element.className.replace("", "active");
      else element.className = element.className.replace("active", "");
    }else{

    }
  
    /*
  }
     if(yPos <= 721  ){
      console.log('home');
      ///var home =active_href.getAttribute('id')
       
      if(links[0].className != 'active')
      links[0].className = links[0].className.replace("", "active");
      ////this.className = "active";
      //home.className = home.className.replace("active", "");
      All_href.forEach(nav =>{ 
        if(nav.getAttribute('href') == '#home' ){
          nav.className = nav.className.replace("active", "");
        }
      })
      
    }
    else if (yPos <= 2164) {
      console.log('about');

      if(links[1].className != 'active')
      links[1].className = links[1].className.replace("", "active");
      ////this.className = "active";
      //home.className = home.className.replace("active", "");
      All_href.forEach(nav =>{ 
        if(nav.getAttribute('href') == '#about' ){
          nav.className = nav.className.replace("active", "");
        }
      })
  }
    else if (yPos <= 3608) {
      console.log('service');

      if(links[2].className =! 'active')
      links[2].className = links[2].className.replace("", "active");
      ////this.className = "active";
      //home.className = home.className.replace("active", "");
      All_href.forEach(nav =>{ 
        if(nav.getAttribute('href') == '#service' ){
          nav.className = nav.className.replace("active", "");
        }
      })
  }
  
    else if (yPos <= 5051) {
      console.log('contact');

      if(links[3].className =! 'active')
     
      links[3].className = links[3].className.replace("", "active");
      ////this.className = "active";
      //home.className = home.className.replace("active", "");
      All_href.forEach(nav =>{ 
        if(nav.getAttribute('href') == '#contact' ){
          nav.className = nav.className.replace("active", "");
        }
      })
  }else{
    console.log('cover');
  }*/

  
 
 

});
function runOnScroll(event) {
  nav = document.getElementById('nav-links');
  console.log( window.pageYOffset);
  var yPos = window.pageYOffset;
  console.log(yPos);
    var isThereClass = nav.className.indexOf("nav-links");
    if(yPos > 150 && isThereClass == -1){
        nav.className = nav.className + " navbar-fixed-top";
    } else if (yPos < 150 && isThereClass != -1) {
        nav.className = nav.className - " navbar-fixed-top";
    }
/*  const navList = document.querySelector('.site-navbar ul a .active');
  console.log(navlist);
  navList.className('active')*/
  // not the most exciting thing, but a thing nonetheless
  ///console.log(element);
   // active_href.
 /*var currentLink = document.getElementsByClassName("active");
 currentLink.className = link.className.replace(" active", "");
 this.className += " active";
*/

};
