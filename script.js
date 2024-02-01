
const portfolioDisplay = document.querySelector('.projects')

fetch('data.json').then(function (response) {
    return response.json() 
}).then(function (data) {
    data.projects.forEach(function (project) {
        portfolioDisplay.innerHTML += `<div class = "individualpro">
        <h2><a href="${project.link}">${project.title}</a></h2>
        <a class="project-img" href="${project.link}"><img class = "image" src="${project.image}"></img></a>
        </div>`
    })
})

// HAVE TO MKAE IF STATEMNT TO PROJECTS ADDED TO JASON ARE NOT ADDED HORIZONTALLY


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("dropdown-content");
  }




//`<h2><a href="${project.link}">${project.title}</a></h2>
  //  <a class="project-img" href="${project.link}"><img src="${project.image}"></img></a>`
    //})
//let photo = document.createElement('img');
//src = `images/${project.image}`;

//photo.alt = `${project.image}`