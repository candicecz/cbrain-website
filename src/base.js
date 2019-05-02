/*
 NOTE: In production, we wrap the repo in an iframe so that we can use a custom domain on a repo held within an organization.
 In doing so, we lose the favicon and responsive mobile view. This function must execute on each html page in order to
 repair that.
*/

(function addFavicon() {
  const link = parent.document.createElement("link");
  link.type = "image/x-icon";
  link.rel = "shortcut icon";
  link.href = "http://acelab.ca/assets/cbrain-icon-blue.png";
  parent.document.getElementsByTagName("head")[0].appendChild(link);
}());

(function makeViewportResponsive() {
  const meta = parent.document.createElement("meta");
  meta.content = "width = device-width, initial-scale = 1";
  meta.name = "viewport";
  parent.document.getElementsByTagName("head")[0].appendChild(meta);
}());
