import "./features.scss";
import handleAnimations from "../animations";
import "../partials/partials";

const animations = Array.from(document.querySelectorAll(".animation"));

window.addEventListener("load", () => {
  document.body.style.visibility = "visible";
  handleAnimations(animations);
});
window.addEventListener("scroll", () => handleAnimations(animations));
window.addEventListener("resize", () => handleAnimations(animations));
