var $ = function (selector) {
  return document.querySelector(selector);
};


const drums = [
  {name: 'kick', key: 32, sound: 'sounds/kick.wav'},
  {name: 'snare', key: 65, sound: 'sounds/snare.wav'},
  {name: 'hihat', key: 87, sound: 'sounds/hihat.wav'},
  {name: 'openhat', key: 69, sound: 'sounds/openhat.wav'},
  {name: 'tom', key: 82, sound: 'sounds/tom.wav'},
  {name: 'tink', key: 81, sound: 'sounds/tink.wav'},
];

function renderKit (drums) {
  drums.forEach(drum => {
    let name = drum.name;
    let drumkit = $('div.drumkit')
    let html =
      `<div class="drum ${name}">
          <p>${name}</p>
          <audio src="${drum.sound}" type="audio/wav"></audio>
        </div>`;

    drumkit.innerHTML += html;
    playDrum.bind
    $('div.drumkit').onclick = alert(name);
  });
}

function playDrum (drum) {
  console.log(`${drum} is clicked`);
  return function play (drum) {
    $(`audio.${drum}`).play();
  }
}

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

// renderElement('div.drumkit', 'div', ['drum', 'bass'], 'bass')

renderKit(drums);