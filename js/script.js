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
    code: github + 'WhatCountryAmI' },
  { name: 'Linguo', url: 'https://linguoisdead.herokuapp.com/',
    code: github + 'linguo' },
];

var fragment = document.createDocumentFragment();

projects.forEach(function(project) {
  var div  = make("div"),
      a    = make("a"),
      code = make('a'),
      h2   = make("h2"),
      img  = make("img")

  a.href = project.url;
  h2.innerHTML = project.name.replace(/-/g, " ");
  img.src = "images/" + project.name + ".png";
  a.appendChild(h2);
  a.appendChild(img);

  code.className = 'code';
  code.innerHTML = 'Source code';
  code.href = project.code;

  div.appendChild(a);
  div.appendChild(code);
  div.className = "project";
  fragment.appendChild(div);
});

document.getElementById("sect-portfolio").appendChild(fragment);

function make(tag) {
  return document.createElement(tag);
}