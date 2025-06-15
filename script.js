let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let header = document.querySelector(".header");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;

  // Show header when scrolling up
  if (scrollTop < lastScrollTop) {
    header.style.top = "0";
  } else {
    // Hide header when scrolling down
    header.style.top = "-100px";
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // avoid negative

  // Active link switching
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      document
        .querySelector(`header nav a[href*="${id}"]`)
        .classList.add("active");
    }
  });
});

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};


















// let menuIcon = document.querySelector("#menu-icon");
// let navbar = document.querySelector(".navbar");
// let sections = document.querySelectorAll("section");
// let navLinks = document.querySelectorAll("header nav a");
// window.onscroll = () => {
//   sections.forEach((sec) => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop - 150;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       navLinks.forEach((links) => {
//         links.classList.remove("active");
//         document
//           .querySelector("header nav a [href*=" + id + "]")
//           .classList.add("active");
//       });
//     }
//   });
// };
// menuIcon.onclick = () => {
//   menuIcon.classList.toggle("bx-x");
//   navbar.classList.toggle("active");
// };
