// This is the code for the landing page and animation.
document
  .querySelector(".click-to-load")
  .addEventListener("click", zoomOutAndRedirect);

function zoomOutAndRedirect() {
  const desktop = document.querySelector(".desktop-1");
  desktop.classList.add("zoom-out");

  setTimeout(() => {
    window.location.href = "checker.html";
  }, 500);
}
