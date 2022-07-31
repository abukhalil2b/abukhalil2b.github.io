let memoSowars = document.querySelectorAll(".memo_sowars > div");
let memoJuzs = document.querySelectorAll(".memo_juzs > div");

for (let index = 0; index < memoSowars.length; index++) {
  const element = memoSowars[index];
  element.addEventListener("click", () => {
    element.classList.toggle("selected");
  });
}

for (let index = 0; index < memoJuzs.length; index++) {
  const element = memoJuzs[index];
  element.addEventListener("click", () => {
    element.classList.toggle("selected");
  });
}
