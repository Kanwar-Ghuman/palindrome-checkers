// let wordEl = document.querySelector("#wordEl");
// let resultEl = document.querySelector("#resultEl");

// window.addEventListener("load", () => {
//   let obj = Object.keys(localStorage);
//   let sortObj = obj.sort();
//   console.log(sortObj);
//   let length = localStorage.length - 1;
//   console.log(obj[length]);
//   let key = obj[length];
//   let info = localStorage.getItem(obj[length]);
//   wordEl.innerHTML = "Word: " + key;
//   if (info === "true") {
//     resultEl.innerHTML = "Status: Palindrome";
//   } else if (info === "false") {
//     resultEl.innerHTML = "Status: No Palindrome";
//   }
// });

// let wordEl = document.querySelector("#wordEl");
// let resultEl = document.querySelector("#resultEl");

// window.addEventListener("load", () => {
//   let obj = Object.keys(localStorage).sort((a, b) => Number(a) - Number(b));
//   console.log(obj);
//   let length = obj.length - 1;
//   console.log(obj[length]);
//   let key = obj[length];
//   let info = localStorage.getItem(key);
//   wordEl.innerHTML = "Word: " + key;
//   if (info === "true") {
//     resultEl.innerHTML = "Status: Palindrome";
//   } else if (info === "false") {
//     resultEl.innerHTML = "Status: No Palindrome";
//   }
// });

// function saveEntry(key, value) {
//   let index = localStorage.getItem("index");
//   index = index ? Number(index) + 1 : 0;
//   localStorage.setItem("index", index.toString());
//   localStorage.setItem("entry_" + index, JSON.stringify({ key, value }));
// }

// function getLatestEntry() {
//   let index = localStorage.getItem("index");
//   if (index !== null) {
//     let entry = JSON.parse(localStorage.getItem("entry_" + index));
//     if (entry) {
//       return entry;
//     }
//   }
//   return null;
// }

// window.addEventListener("load", () => {
//   let latestEntry = getLatestEntry();
//   if (latestEntry) {
//     let wordEl = document.querySelector("#wordEl");
//     let resultEl = document.querySelector("#resultEl");
//     wordEl.innerHTML = "Word: " + latestEntry.key;
//     if (latestEntry.value === "true") {
//       resultEl.innerHTML = "Status: Palindrome";
//     } else if (latestEntry.value === "false") {
//       resultEl.innerHTML = "Status: No Palindrome";
//     }
//   }
// });

// function main() {
//   let wordEl = document.querySelector("#wordEl");
//   let resultEl = document.querySelector("#resultEl");
//   window.addEventListener("load", () => {
//     let resultHTML = "";
//     for (let i = 0; i < localStorage.length; i++) {
//       let key = localStorage.key(i);
//       let value = localStorage.getItem(key);
//       let displayText =
//         value === "true"
//           ? '<span style="color: #31c48d;">Palindrome</span>'
//           : '<span style="color: #f05252;">No Palindrome</span>';
//       resultHTML += `<div>${
//         key.substring(0, 1).toUpperCase() + key.substring(1)
//       }, ${displayText}</div>`;
//     }
//     resultEl.innerHTML = resultHTML;
//   });
// }

// main();

// function main() {
//   let wordEl = document.querySelector("#wordEl");
//   let resultEl = document.querySelector("#resultEl");

//   window.addEventListener("load", () => {
//     // Assume the keys are in the format of "word_timestamp"
//     const entries = Object.keys(localStorage)
//       .map((key) => ({
//         key: key,
//         timestamp: key.split("_")[1],
//         value: localStorage.getItem(key),
//       }))
//       .sort((a, b) => b.timestamp - a.timestamp);

//     // If there are any entries, keep the most recent one
//     if (entries.length > 0) {
//       const mostRecentEntry = entries[0];
//       localStorage.clear(); // Clear all entries
//       localStorage.setItem(mostRecentEntry.key, mostRecentEntry.value); // Re-save the most recent entry

//       // Update the HTML
//       const displayText =
//         mostRecentEntry.value === "true"
//           ? '<span style="color: #31c48d;">Palindrome</span>'
//           : '<span style="color: #f05252;">No Palindrome</span>';
//       resultEl.innerHTML = `<div>${
//         mostRecentEntry.key.split("_")[0]
//       }, ${displayText}</div>`;
//     }
//   });
// }

// main();

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

// let wordEl = document.querySelector("#wordEl");
// let resultEl = document.querySelector("#resultEl");

// window.addEventListener("load", () => {
//   let arrayComp = localStorage.getItem("Array");
//   console.log(arrayComp);
//   wordEl.innerHTML = "Word: " + arrayComp;
//   let info = localStorage.getItem(arrayComp);
//   if (info === "true") {
//     resultEl.innerHTML = "Status: Palindrome";
//     resultEl.style.color = "green";  // Set text color to green
//   } else {
//     resultEl.innerHTML = "Status: Not a Palindrome";
//     resultEl.style.color = "red";  // Set text color to red
//   }
// });
