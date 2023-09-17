let ul = document.querySelectorAll("li");

let previousLi;

ul.forEach((li) => {
  li.addEventListener("click", () => {
    const content = li.querySelector(".content");
    content.style.height = 0;

    if (li === previousLi && li.classList.contains("active")) {
      content.style.height = "0px";
      setTimeout(() => {
        li.classList.remove("active");
      }, 100);
      previousLi = undefined;
      return;
    }

    if (previousLi) {
      previousLi.querySelector(".content").style.height = "0px";
      previousLi.classList.remove("active");
    }

    setTimeout(() => {
      li.classList.add("active");
      content.style.height = content.scrollHeight + "px";
    }, 50);
    previousLi = li;
  });
});
