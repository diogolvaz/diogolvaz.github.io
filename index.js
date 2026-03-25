
/**************************************************************************************************************************** */

document.getElementById("last_update").innerHTML =
  "@ " + new Date(document.lastModified).getFullYear() + " Diogo Vaz";

/**************************************************************************************************************************** */

document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll('.logo-carousel');
  carousels.forEach((carousel) => {
    const images = carousel.querySelectorAll('img');
    let current = 0;
    images[0].classList.add('active');
    setInterval(() => {
      const next = (current + 1) % images.length;
      // Add next first (prevents gap)
      images[next].classList.add('active');
      setTimeout(() => {
        images[current].classList.remove('active');
        current = next;
      }, 200);
    }, 2000);
  });
});

// /**************************************************************************************************************************** */