let string = "";
let buttons = document.querySelectorAll("button");
let input = document.querySelector("input");
let resultDisplay = document.querySelector(".result");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.innerHTML;

    if (value === "=") {
      try {
        let finalString = string
          .replace(/X/g, "*")
          .replace(/÷/g, "/")
          .replace(/%/g, "/100");

        let result = eval(finalString);
        resultDisplay.innerText = result;
      } catch {
        resultDisplay.innerText = "Error";
      }
      return;
    }

    if (value === "C") {
      string = "";
      input.value = "";
      resultDisplay.innerText = "";
      return;
    }

    if (value === "Del") {
      string = string.slice(0, -1);
      input.value = string;
      return;
    }

    string += value;
    input.value = string;
  });
});
