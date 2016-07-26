$(document).ready(function() {
    $('#fullpage').fullpage({
      sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE'],
      anchors: ["home", "portfolio", "about"]
    });
});

//  Add projects to the page
var github = 'https://github.com/afurth89/'
var projects = [
  { name: 'O.S.Q.A.R', url: 'http://osqarlearning.com/',
    ghURL: github + 'OSQAR', 
    description: "'O.S.Q.A.R', or the Open Source Question & Answer Resource, is a web application that allows teachers to create and administer custom assessments in minutes by being able to incorporate any question created by other teachers on the platform.",
    tech: "Front end: AngularJS, nvD3 Angular visualization library, Bootstrap/Bootswatch, and Javascript.  Back-end" },
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

var fragmentPg1 = document.createDocumentFragment();
var fragmentPg2 = document.createDocumentFragment();
var projContainerPg1  = make("div");
var projContainerPg2  = make("div");

projects.forEach(function(project) {
  console.log("This is the first project? ", projects[0] === project)
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

  // Project description
  description.className = "proj-description"
  description.innerHTML = project.description  

  // Project tech
  techUsed.className = "proj-tech"
  techUsed.innerHTML = project.tech
  
  // Project Image
  var imgName = project.name.replace(/\W/g,"");
  img.src = "/images/" + imgName + ".png";
  
  // Append title and image to top 'a' tag
  a.appendChild(h2);
  a.appendChild(img);

  // GitHub repo
  code.className = 'code';
  code.href = project.ghURL;
  ghIcon.className = "fa fa-github fa-5x"
  code.appendChild(ghIcon)

  // Add elements to project container
  proj.appendChild(a);
  proj.appendChild(description);
  proj.appendChild(techUsed);
  proj.appendChild(code);
  
  if (project === projects[0]) {
    proj.className = "project-pg1";
    projContainerPg1.appendChild(proj);
  } else {
    proj.className = "project-pg2";
    projContainerPg2.appendChild(proj)
  }
});

projContainerPg1.className = "project-container"
projContainerPg2.className = "project-container"
fragmentPg1.appendChild(projContainerPg1);
fragmentPg2.appendChild(projContainerPg2);
document.getElementById("sect-portfolio-p1").appendChild(fragmentPg1);
document.getElementById("sect-portfolio-p2").appendChild(fragmentPg2);

function make(tag) {
  return document.createElement(tag);
}