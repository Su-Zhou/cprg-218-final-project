console.log('Thank you for teaching me these two semesters! I have learned a lot that I never thought I would in terms of coding');

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
