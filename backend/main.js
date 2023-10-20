// const supabase = createClient(
//   "https://hhkzlbvlibzznkazfuhd.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhoa3psYnZsaWJ6em5rYXpmdWhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc2Njc5NjAsImV4cCI6MjAxMzI0Mzk2MH0.IAisboIx-XcEvf9Yd_hQatGMhsHyhPX-IO3riBoyo1U"
// );
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
// async function addPalindrome(input) {
//   const { error } = await supabase
//     .from("palindromes")
//     .insert({ id: 1, name: input });
// }

function main() {
  let inputEl = document.querySelector("#inputEl");
  let checkBtn = document.querySelector("#checkBtn");
  let arr = [];
  checkBtn.addEventListener("click", () => {
    let isPalindrome = checkPalindrome(inputEl.value);

    if (isPalindrome) {
      // setResults(inputEl.value);
      // wordEl.innerHTML = "Word: " + inputEl.value;
      // resultEl.innerHTML = "Status: Palindrome";
      localStorage.setItem(inputEl.value, "true");
      // addPalindrome(inputEl.value);
      arr.push(inputEl.value);
      localStorage.setItem("Array", arr);
    } else {
      // wordEl.innerHTML = "Word: " + inputEl.value;
      // resultEl.innerHTML = "Status: Not a Palindrome";
      localStorage.setItem(inputEl.value, "false");
      arr.push(inputEl.value);
      localStorage.setItem("Array", arr);
    }
    inputEl.value = "";
    window.location.href = "result.html";
  });
}

main();
