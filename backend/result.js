let wordEl = document.querySelector("#wordEl");
let resultEl = document.querySelector("#resultEl");

window.addEventListener("load", () => {
  let arrayComp = localStorage.getItem("Array");
  console.log(arrayComp);
  wordEl.innerHTML = "Word: " + arrayComp;

  let info = localStorage.getItem(arrayComp);
  const displayText =
    info === "true"
      ? 'Status: <span style="color: #31c48d;">Palindrome</span>'
      : 'Status: <span style="color: #f05252;">No Palindrome</span>';
  resultEl.innerHTML = displayText;
});
