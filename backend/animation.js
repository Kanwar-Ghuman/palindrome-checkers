document
  .querySelector('.navbar a[href="history.html"]')
  .addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the default link behavior
    var container = document.querySelector(".container");
    container.classList.add("animated", "slideInRight"); // Add the animation classes
    setTimeout(function () {
      window.location.href = "history.html"; // Navigate to history.html after the animation
    }, 1000); // The delay should match the animation duration
  });
