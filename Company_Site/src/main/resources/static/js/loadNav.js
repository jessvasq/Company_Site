const nav_header = document.getElementById("navbar");

// DOMContentLoaded loads the header as soon as the HTML is loaded, js script inserts the header before the user interacts with the page
document.addEventListener("DOMContentLoaded", loadNav());

function loadNav(){
    fetch("nav.html")
        .then(response => response.text())
        .then(data => {
            nav_header.innerHTML = data;
        })
}


const footer = document.getElementById("footer1");

document.addEventListener("DOMContentLoaded", loadFooter());

function loadFooter(){
    //fetch the html file. fetches the resource and returns a promise
    fetch("footer.html")
        //convert the response to text. Response object is the result of the 'fetch' request
        .then(response => response.text())
        //insert the fetched HTML into the placeholder div
        .then(data =>{
            footer.innerHTML = data;
        })}

