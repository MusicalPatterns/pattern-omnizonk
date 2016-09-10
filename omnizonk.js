var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var voices = [];

MAX_EDO = 50;
BASE_GAIN = 0.001;
BASE_FREQ = 440;

for(var i = 1; i <= MAX_EDO; i++) {
  addEdo(i);
}

function addEdo(edo) {
  for(var j = 0; j < edo; j++) {
    addVoice(edo, j);
  }
}

function addVoice(edo, j) {
  var rounded = (j / edo).toPrecision(16);
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
