const widthHolder = document.querySelector("#currentWidth");

document.addEventListener("DOMContentLoaded", () => {
  widthHolder.innerHTML = document.documentElement.clientWidth;
});

window.addEventListener("resize", () => {
  console.log("resize");
  widthHolder.innerHTML = Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
});
