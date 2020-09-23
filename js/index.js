const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2020',
  },
};

//write your code here
const parent = document.querySelector(".container");
console.log(parent);
//clone
const conbefore=document.querySelector(".container").cloneNode(true);


// add child 
var ele = document.createElement("a");                 
var textele = document.createTextNode("menue");        
ele.appendChild(textele);  
const n = document.querySelector("body > div > header > nav");                        
n.appendChild(ele);

var ele2 = document.createElement("a");               
var textele2 = document.createTextNode("bar");         
ele2.appendChild(textele2);                        
n.appendChild(ele2);



const aaa = document.querySelectorAll('body  > div > header > nav  > a');
// Array copy
const newA = [...aaa];
let names = ["services", "product","vision","featers","About","contact","menue","bar"];
//for loop 
for(var i=0; i<newA.length; i++){
  newA[i].textContent=names[i];
  newA[i].style.color="green";
}

const a = document.querySelector('body  > div > header > img');
a.setAttribute("src","./img/logo.png");

 const a1 = document.querySelector("body > div > section.cta > div > h1");
 a1.textContent=  ` DOM   IS   AWESOME`;

 const a2 = document.querySelector("body > div > section.cta > div > button");
 a2.textContent="Get started";
 


 a2.addEventListener("click", myFunction);
 function myFunction() {
   document.body.textContent="";
   document.body.appendChild(conbefore);
  }
  


 const a3=  document.getElementById("cta-img");
 a3.setAttribute("src","./img/header-img.png");

 //top 1
 const top1 = document.querySelector(".text-content > h4");
 top1.textContent="FEACTERS";

 const top1p = document.querySelector(".text-content >p");
 top1p.textContent="The Document Object Model (DOM)  is a programmingis a  programmingis a programmingis a programming interface for HTML and XML documents. It repre";

 //2
 const top2= document.querySelector("body > div > section.main-content > div.top-content > div:nth-child(2) > h4");
 top2.textContent="ABOUT";

 const top2p = document.querySelector("body > div > section.main-content > div.top-content > div:nth-child(2) > p");
top2p.textContent="The Document Object Model (DOM) is a programmingis interface for HTML and XML documents. It repre";


//middle
const a6 = document.querySelector("#middle-img");
a6.setAttribute("src","./img/mid-page.jpg");

//bottom 1
const bh1= document.querySelector("body > div > section.main-content > div.bottom-content > div:nth-child(1) > h4");
bh1.textContent="SERVICES";

const bp1= document.querySelector("body > div > section.main-content > div.bottom-content > div:nth-child(1) > p");
bp1.textContent="The Document Object Model (DOM) is a programmingis a programmingis a programming interface for HTML and XML documents. It repre";
//2
const bh2= document.querySelector("body > div > section.main-content > div.bottom-content > div:nth-child(2) > h4");
bh2.textContent="PRODUCT";

const bp2= document.querySelector("body > div > section.main-content > div.bottom-content > div:nth-child(2) > p");
bp2.textContent="The Document Object Model (DOM) is a programmingis a programmingis a programmingis  interface for HTML and XML documents. It repre";
//3
const bh3 = document.querySelector("body > div > section.main-content > div.bottom-content > div:nth-child(3) > h4");
bh3.textContent="VISION";

const bp3 = document.querySelector("body > div > section.main-content > div.bottom-content > div:nth-child(3) > p");
bp3.textContent="The Document Object Model (DOM) is a programmingis interface for HTML and XML documents. It repre";
//footer
 const b1 = document.querySelector("body > div > section.contact > h4");
 b1.textContent="CONTACT";

 const b2 = document.querySelector("body > div > section.contact > p:nth-child(2)");
b2.textContent="123 way,456street";

const b3= document.querySelector("body > div > section.contact > p:nth-child(3)");
b3.textContent="1(88-888-8)";

const b4 = document.querySelector("body > div > section.contact > p:nth-child(4)");
b4.textContent="sales@hgf.com";

const c1= document.querySelector("body > div > footer > p");
c1.textContent="Copy right great idea! 2018 ";