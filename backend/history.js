function main() {
  let history = document.querySelector("#history");
  window.addEventListener("load", () => {
    let historyHTML = "";
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if (key === "Array") {
        continue;
      }
      let value = localStorage.getItem(key);
      let displayText =
        value === "true"
          ? '<span style="color: #31c48d;">Palindrome</span>'
          : '<span style="color: #f05252;">No Palindrome</span>';
      historyHTML += `<div>${
        key.substring(0, 1).toUpperCase() + key.substring(1)
      }, ${displayText}</div>`;
    }
    history.innerHTML = historyHTML;
  });
}

main();
