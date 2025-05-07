document.querySelectorAll(".highlight-button").forEach((button) => {
  button.addEventListener("mousemove", (e) => {
    const { x, width } = button.getBoundingClientRect();
    const offset = e.clientX - x;
    const percent = (offset / width) * 100;
    button.style.setProperty("--x", percent + "%");
  });
});
