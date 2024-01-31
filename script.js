
const projectsDisplay = document.querySelector('.projects')

fetch('data.json').then(function (response) {
    return response.json() 
}).then(function (data) {
    data.projects.forEach(function (project) {
        projectsDisplay.innerHTML += `<div class = "individualpro">
        <h2><a href="${project.link}">${project.title}</a></h2>
        <a class="project-img" href="${project.link}"><img class = "image" src="${project.image}"></img></a>
        </div>`
    })
})




function myFunction() {
    document.getElementById("myDropdown").classList.toggle("dropdown-content");
  }


//`<h2><a href="${project.link}">${project.title}</a></h2>
  //  <a class="project-img" href="${project.link}"><img src="${project.image}"></img></a>`
    //})
//let photo = document.createElement('img');
//src = `images/${project.image}`;

//photo.alt = `${project.image}`;

//make a dropdown for contact button for 'linked in, email, phone' and javascript make the phone open the phone app? and email open the email app?

//or 

//make a contact form orrrrr make a separtate contacts page 

//make the separate pages for the projects to link to and put description and fake github link on those 

//javascript for adding the JSON
//java for the buttons?
//maybe some cute cool effetcs with javascriot get IDeas 
//add media queries to make page responsive to mobiles - CSS
//research what else 
