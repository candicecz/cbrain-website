/* eslint-disable  */
import "./projects.scss";
import "../partials/partials";

const toggleDrawer = e => {
  // Close previously opened drawers;
  const id = e.currentTarget.id;
  Array.from(document.querySelectorAll("[data-selected]")).map(el => {
    !el.id.includes(id)
      ? (el.dataset.selected = false)
      : (el.dataset.selected = !JSON.parse(el.dataset.selected));
  });

  styleDrawer();
};

const styleDrawer = () => {
  // Set the dynamic styles of the drawer when toggled and when the window is resized
  const drawer_list = Array.from(document.querySelectorAll(".project-content"));
  drawer_list.map(drawer_el => {
    const content_el = drawer_el.querySelector(".project-content-text");
    const { height } = content_el.getBoundingClientRect();
    drawer_el.style.height = `${0}px`;
    content_el.style.marginTop = `${0 - height}px`;

    if (JSON.parse(drawer_el.dataset.selected) === true) {
      drawer_el.style.height = `${height}px`;
      content_el.style.marginTop = `${0}px`;
    }
  });
};

window.addEventListener("load", () => {
  const projects = Array.from(document.querySelectorAll(".project"));
  projects.map(project => project.addEventListener("click", toggleDrawer));
  document.body.style.visibility = "visible";
  styleDrawer();
});
window.addEventListener("resize", styleDrawer);
