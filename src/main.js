document.querySelectorAll(".highlight-button").forEach((button) => {
  button.addEventListener("mousemove", (e) => {
    const { x, width } = button.getBoundingClientRect();
    const offset = e.clientX - x;
    const percent = (offset / width) * 100;
    button.style.setProperty("--x", percent + "%");
  });
});

const sideBarToggle = document.querySelector(".toggle-side-bar");
if (sideBarToggle) {
  sideBarToggle.onclick = function () {
    this.classList.toggle("open");
  };
}

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

const copyButton = document.getElementById("copy-button");
const copyText = document.getElementById("copy-text")?.innerText;

copyButton?.addEventListener("click", () => {
  window.navigator.clipboard.writeText(copyText).then(() => {
    alert("Address Copied to Clipboard");
  });
});

const openModalButton = document.getElementById("open-modal");
const closeModalButton = document.querySelector(".close-modal");
const modal = document.getElementById("modal");

openModalButton?.addEventListener("click", () => {
  modal?.classList.toggle("open");
});
closeModalButton?.addEventListener("click", () => {
  modal?.classList.remove("open");
});

document
  .querySelectorAll("body > header nav a.internal-nav")
  .forEach((anchor) => {
    anchor.onclick = (event) => {
      event.preventDefault();
      sideBarToggle.classList.remove("open");
      const tag = anchor.href.split("/").at(-1).substring(1);

      const element = document.getElementById(tag);

      if (!element) return;

      element.scrollIntoView({
        behavior: "smooth",
      });
    };
  });
