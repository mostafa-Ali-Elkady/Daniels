// Start Typing
var typed = new Typed(".element", {
  strings: ["Developer", "Designer", "Larry Daniels"],
  typeSpeed: 60,
  backSpeed: 60,
  smartBackspace: true,
  loop: true,
  loopCount: Infinity,
});
// End Typing
// counter
const counters = document.querySelectorAll(".count-num"),
  container = document.querySelector("#counter");

let activated = false;
window.addEventListener("scroll", () => {
  let nav = document.querySelector("#nav")

  if (window.scrollY > 500) {
    nav.classList.add('scrolled')
  } else {
    nav.classList.remove('scrolled')
  }

  if (scrollY > container.offsetTop - container.offsetHeight - 200 && activated == false) {
    counters.forEach(counter => {
      counter.innerText = 0;
      let count = 0;

      function updateCount() {
        const target = parseInt(counter.dataset.count);

        if (target > count) {
          count++
          counter.innerText = count

          setTimeout(updateCount, 10)
        } else {
          counter.innerText = target
        }
      }
      updateCount()
      activated = true;
    })
  }
})
// End Counter
// light Gallery
lightGallery(document.getElementById('lightgallery'), {
  speed: 500,
  thumbnail: true,

  // ... other settings
});
// Portfolio
let filterListItems = document.querySelectorAll(".filtering .filtering-item"),
  filtersImages = document.querySelectorAll(".filterd-images a");

filterListItems.forEach((list) => {
  list.addEventListener("click", () => {
    document.querySelector(".filtering-item.active").classList.remove("active");
    list.classList.add("active")
    let filtedValue = list.dataset.filter;
    filtersImages.forEach(image => {
      if (image.classList.contains(filtedValue)) {
        image.classList.remove("hidden")
        image.classList.add("active")
      } else {
        image.classList.remove("active")
        image.classList.add("hidden")
      }
    })
  });
});
///////////////////////
// add active class to nav link
let links = document.querySelectorAll(".nav-link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    // loop through all links
    links.forEach((otherLink) => {
      // check if the link is the clicked link
      if (otherLink !== link) {
        // remove the "active" class from other links
        otherLink.classList.remove("active");
      }
    });
    // add or remove the "active" class from the clicked link
    if (link.classList.contains("active")) {
      link.classList.remove("active");
    } else {
      link.classList.add("active");
    }
  });
});
////////////////////////////