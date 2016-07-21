$(document).ready(function() {
    $('#fullpage').fullpage({
      sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE'],
      anchors: ["home", "portfolio", "about"]
    });
});

//  Add projects to the page
var github = 'https://github.com/afurth89/'
var projects = [
  { name: 'What Country Am I?', url: 'http://andrew-furth-geography-game.bitballoon.com/',
    ghURL: github + 'WhatCountryAmI', 
    description: "A geography web application to allow users to build and test their knowledge of the world's geography by seeing how many countries they can identify in a set time-period. ",
    tech: "Built in four days using HTML5, Twitter Bootstrap with CSS3, JavaScript, jQuery, Lodash and the Google GeoChart API." },
  { name: 'Linguo', url: 'https://linguoisdead.herokuapp.com/',
    ghURL: github + 'linguo',
    description: "A language-oriented web application that connects users based on their location and proficiency, and facilitates direct communication via chat to enable opportunities for shared teaching and learning experiences.",
    tech: "Built in four days, in collaboration with Thomas O'Brien and Ken Korcal. The stack includes Javascript, Node.js, Express, PostgreSQL, Jade, Knex and Passport OAuth."
  }
];

var fragment = document.createDocumentFragment();
var projContainer  = make("div");

projects.forEach(function(project) {
  var proj  = make("div"),
      a    = make("a"),
      code = make('a'),
      h2   = make("h2"),
      description = make("p"),
      techUsed = make("p")
      img  = make("img")
      ghIcon = make('i')

  // Parent 'a' tag 
  a.href = project.url;

  // Inner text/images
  h2.innerHTML = project.name.replace(/-/g, " ");

  description.className = "proj-description"
  description.innerHTML = project.description  

  techUsed.className = "proj-tech"
  techUsed.innerHTML = project.tech
  
  var imgName = project.name.replace(/\W/g,"");
  img.src = "/images/" + imgName + ".png";
  
  a.appendChild(h2);
  a.appendChild(img);

  // GitHub repo
  code.className = 'code';
  code.href = project.ghURL;
  ghIcon.className = "fa fa-github fa-5x"
  code.appendChild(ghIcon)

  proj.appendChild(a);
  proj.appendChild(description);
  proj.appendChild(techUsed);
  proj.appendChild(code);
  proj.className = "project";
  projContainer.appendChild(proj);
});

projContainer.className = "project-container"
fragment.appendChild(projContainer);
document.getElementById("sect-portfolio-p2").appendChild(fragment);

function make(tag) {
  return document.createElement(tag);
}