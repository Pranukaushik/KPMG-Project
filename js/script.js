const header = document.getElementById("header");

function renderMenu() {
  const navItems = [
    { label: "Home", url: "#" },
    { label: "Bundles", url: "#" },
    { label: "Save Energy & Money", url: "#" },
    { label: "Products & Services", url: "#" },
    { label: "Start, Shop & More", url: "#" },
  ];

  let navMenu = document.getElementById("nav-menu-primary");

  navItems.forEach((item) => {
    let listItem = document.createElement("li");
    listItem.classList.add("nav-item");
    let anchor = document.createElement("a");
    anchor.classList.add("nav-link");
    anchor.innerHTML = item.label;
    anchor.href = item.url;
    listItem.appendChild(anchor);
    navMenu.appendChild(listItem);
  });
}

function handleHeaderStyle() {
  window.addEventListener("scroll", function () {
    var scrollTop =
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;
    if (scrollTop > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

const testiomnialsSwiper = new Swiper(".swiper-testimonials", {
  direction: "horizontal",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: true,
  autoplayDisableOnInteraction: true,
});

const projectsSwiper = new Swiper(".swiper-projects", {
  direction: "horizontal",
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
  },
});

function handleSubmit(undefined, event) {
  console.log(event.target[0].value);
}

function expandMenu() {
  if (header.classList.contains("expanded")) {
    header.classList.remove("expanded");
    header.classList.remove("scrolled");
  } else {
    header.classList.add("expanded");
    header.classList.add("scrolled");
  }
}

handleHeaderStyle();
renderMenu();
