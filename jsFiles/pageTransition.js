document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a[href]:not([target])");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Ignore in-page links and JavaScript voids
      if (href.startsWith("#") || href.startsWith("javascript:")) return;

      e.preventDefault();
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = href;
      }, 600); // Match CSS transition duration
    });
  });
});


