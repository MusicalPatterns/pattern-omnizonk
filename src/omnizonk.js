var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var voices = [];

MAX_EDO = 50;
BASE_GAIN = 0.001;
BASE_FREQ = 440;

for(var i = 0; i <= MAX_EDO; i++) {
  addEdo(i);
}

function addEdo(edo) {
  for(var j = 0; j < edo; j++) {
    // if (j/edo > .5) {
    //   addVoice(edo, j, true);
    // } else if (j/edo === .5) {
    //   if (Math.random() > .5) {
    //     addVoice(edo, j, true);
    //   } else {
    //     addVoice(edo, j);
    //   }
    // } else {
      addVoice(edo, j);
    // }
  }
}

function addVoice(edo, j, lowerByOctave) {
  var rounded = (j / edo).toPrecision(16);
  if (lowerByOctave) rounded /= 2;
  if (voices[rounded]) {
    voices[rounded].count++;
    voices[rounded].gainNode.gain.value = BASE_GAIN * voices[rounded].count;
  } else {
    initializeVoice(rounded)
  }
}

function initializeVoice(pitch) {
  newVoice = {
    oscNode: audioCtx.createOscillator(),
    gainNode: audioCtx.createGain(),
    count: 1
  };

  newVoice.oscNode.connect(newVoice.gainNode);
  newVoice.gainNode.connect(audioCtx.destination);

  newVoice.oscNode.type = 'sine';
  newVoice.oscNode.frequency.value = BASE_FREQ * Math.pow(2,pitch);
  newVoice.gainNode.gain.value = BASE_GAIN;
  newVoice.oscNode.start();

  voices[pitch] = newVoice;
};
