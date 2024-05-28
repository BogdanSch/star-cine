const header = document.querySelector("header");

function applyStickyHeader() {
  if (window.scrollY > 0) {
    header.classList.add("sticky");
  } else {
    if (header.classList.contains("sticky")) {
      header.classList.remove("sticky");
    }
  }
}

applyStickyHeader();
$(window).on("scroll", () => applyStickyHeader());
