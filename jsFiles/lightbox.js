document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const captionText = document.getElementById("lightboxCaption");
  const closeBtn = document.querySelector(".lightboxClose");
  const nextBtn = document.querySelector(".lightboxNext");
  const prevBtn = document.querySelector(".lightboxPrev");

  const images = Array.from(document.querySelectorAll(".lightboxPic"));
  let currentIndex = 0;

  function showImage(index) {
    const img = images[index];
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    captionText.textContent = img.alt;
    lightbox.style.display = "block";
  }

  images.forEach((img, i) => {
    img.addEventListener("click", () => {
      currentIndex = i;
      showImage(currentIndex);
    });
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});
