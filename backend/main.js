function checkPalindrome(input) {
  let pointer1 = 0;
  let pointer2 = input.length - 1;

  while (pointer1 < pointer2) {
    if (input[pointer1] !== input[pointer2]) {
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
  let resetBtn = document.querySelector("#resetBtn");
  let resultEl = document.querySelector("#resultEl");
  let wordEl = document.querySelector("#wordEl");
  checkBtn.addEventListener("click", () => {
    let isPalindrome = checkPalindrome(inputEl.value);
    if (isPalindrome) {
      wordEl.innerHTML = "Word: " + inputEl.value;
      resultEl.innerHTML = "Status: Palindrome";
    } else {
      wordEl.innerHTML = "Word: " + inputEl.value;
      resultEl.innerHTML = "Status: Not a Palindrome";
    }
    inputEl.value = null;
  });

  resetBtn.addEventListener("click", () => {
    resultEl.innerHTML = null;
  });
}

main();
