let selectField = document.getElementById("selectField");
let selectText = document.getElementById("selectText");
let options = document.getElementsByClassName("options");
let list = document.getElementById("list");
let arrowIcon = document.getElementById("arrowIcon");

// Toggle dropdown on click
selectField.onclick = function () {
  list.classList.toggle("show");
  list.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
};

// Iterate over options to update the selected text and hide the dropdown
for (let option of options) {
  option.onclick = function () {
    let optionText = this.querySelector("p").textContent; // Select the paragraph text
    selectText.innerHTML = optionText; // Set the selected option's text
    list.classList.remove("show");
    list.classList.add("hide");
    arrowIcon.classList.remove("rotate");
  };
}

// Close dropdown when clicking outside of it
document.addEventListener("click", function (event) {
  if (!selectField.contains(event.target)) {
    list.classList.remove("show");
    list.classList.add("hide");
    arrowIcon.classList.remove("rotate");
  }
});
