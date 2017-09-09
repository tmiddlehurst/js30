import drums from 'drums'

var $ = function (selector) {
  return document.querySelector(selector);
};


const drums = [
  {name: 'kick', sound: 'sounds/kick.wav'},
  {name: 'snare', sound: 'sounds/snare.wav'},
  {name: 'hihat', sound: 'sounds/hihat.wav'},
  {name: 'openhat', sound: 'sounds/openhat.wav'},
  {name: 'tom', sound: 'sounds/tom.wav'},
  {name: 'tink', sound: 'sounds/tink.wav'},
];

function renderKit (drums) {
  let drumkit = $('div.drumkit');

  drums.forEach(drum => {

    let html =
      `<div class="drum ${drum.name}">
        <p>${drum.name}</p>
        <audio src="${drum.sound}" type="audio/wav"></audio>
      </div>`;
    drumkit.innerHTML += html;
  });
}
function addListeners(drums) {

  drums.forEach((drum) => {
    let boundPlay = playDrum.bind(drum.sound)
    $(`div.${drum.name}`).addEventListener('click', function() {

      let sound = new Audio(drum.sound)
      return sound.play();
    });
  })
}

renderKit(drums);
addListeners(drums);