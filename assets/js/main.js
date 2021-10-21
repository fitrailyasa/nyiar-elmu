/*===== MENU TAMPILAN =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/* DARK MODE */
var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("darkmode");
  if (document.body.classList.contains("darkmode")) {
    icon.src = "ico/darkmode.png";
  } else {
    icon.src = "ico/lightmode.png";
  }
};

/*===== MENU AKTIF DAN TIDAK AKTIF =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  /*Tautan Aktif*/
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  /*Tidak Aktif*/
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===== ANIMASI BERGERAK =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/*GESER MENU UTAMA*/
sr.reveal(".home__title", {});
sr.reveal(".button", { delay: 200 });
sr.reveal(".home__img", { delay: 400 });
sr.reveal(".home__social-icon", { interval: 200 });

/*GESER TENTANG*/
sr.reveal(".about__img", {});
sr.reveal(".about__subtitle", { delay: 400 });
sr.reveal(".about__text", { delay: 400 });

/*GESER KEAHLIAN*/
sr.reveal(".skills__subtitle", {});
sr.reveal(".skills__text", {});
sr.reveal(".skills__data", { interval: 200 });
sr.reveal(".skills__img", { delay: 600 });

/*GESER PROJEK*/
sr.reveal(".project__img", { interval: 200 });

/*GESER KONTAK*/
sr.reveal(".contact__input", { interval: 200 });
