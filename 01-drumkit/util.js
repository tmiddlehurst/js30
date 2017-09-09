/*
 * HTML element renderer
 * @param {string} location
 * @param {string} tagName
 * @param {string|Array} classes
 * @param {string} conten
 * TO DO: add params support (e.g. href, id, etc.)
 * TO DO: add support for multiple repeated elements
 */
function renderElement (location, tagName, classes, content, params) {
  location ? location = $(location): location = document;

  classes? classes = `class="${classes.toString().replace(',', ' ')}"`: null;

  return location.innerHTML += `<${tagName} ${classes}>${content}</${tagName}>`;

}