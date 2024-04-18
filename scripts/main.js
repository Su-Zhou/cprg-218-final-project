console.log('Hello, World!');

//dynamic date
document.addEventListener("DOMContentLoaded", () => {
    const date = new Date().getFullYear();
    document.getElementById("year").innerHTML = date;
  });


//navbar hamburger menu responsiveness
  const myFunction = () => {
    const x = document.getElementById("myNavbar");
    if (!x.classList.contains("responsive")) {
        x.classList.add("responsive"); 
    } else {
        x.classList.remove("responsive"); 
    }
};