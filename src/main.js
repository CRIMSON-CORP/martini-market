document.querySelectorAll(".highlight-button").forEach((button) => {
  button.addEventListener("mousemove", (e) => {
    const { x, width } = button.getBoundingClientRect();
    const offset = e.clientX - x;
    const percent = (offset / width) * 100;
    button.style.setProperty("--x", percent + "%");
  });
});

document.querySelector(".toggle-side-bar").onclick = function () {
  this.classList.toggle("open");
};

document.querySelectorAll(".faq-list li").forEach((faqItem) => {
  let isOpen = false;
  faqItem.children[0].onclick = () => {
    if (isOpen) {
      isOpen = false;
      faqItem.children[1].style.maxHeight = "0px";
    } else {
      isOpen = true;
      faqItem.children[1].style.maxHeight =
        faqItem.children[1].scrollHeight + "px";
    }
  };
});
