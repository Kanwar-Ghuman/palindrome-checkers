document.getElementById("clearBtn").addEventListener("click", function () {
  document.getElementById("inputEl").value = "";
});

function checkPalindrome(input) {
  let pointer1 = 0;
  let pointer2 = input.length - 1;

  while (pointer1 < pointer2) {
    if (input[pointer1].toLowerCase() !== input[pointer2].toLowerCase()) {
      return false;
    }
    pointer1++;
    pointer2--;
  }
  return true;
}

function main() {
  let inputEl = document.querySelector("#inputEl");
  let checkBtn = document.querySelector("#checkBtn");
  let arr = [];
  checkBtn.addEventListener("click", () => {
    let isPalindrome = checkPalindrome(inputEl.value);

    if (isPalindrome) {
      localStorage.setItem(inputEl.value, "true");
      arr.push(inputEl.value);
      localStorage.setItem("Array", arr);
    } else {
      localStorage.setItem(inputEl.value, "false");
      arr.push(inputEl.value);
      localStorage.setItem("Array", arr);
    }
    inputEl.value = "";
    window.location.href = "result.html";
  });
}

main();
