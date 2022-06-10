(function () {

var sound = new Howl({
    urls: ['public/kit.ogg'],
    sprite: {
      Kick: [0, 420], Snare: [453, 434], Clap: [11383, 157], Cowbell: [908, 115],
      hiTom: [1360, 602], midTom: [1997, 851], lowTom: [2894, 839],
      'Open HH': [3756, 955], 'Closed HH': [4734, 130],
      Ride: [4911, 962], Tamb: [5878, 277], Crash: [6830, 1267], Splash: [8127, 843],
      China: [9578, 855], hiAgogo: [10591, 433], lowAgogo: [11095, 273],
      rest: [0,0]
    }
});

var bpm = 120;
var current_row = 0;

document.getElementsByClassName("sequencer")[0].addEventListener('click', (e) => {
    var element = document.elementFromPoint(e.pageX, e.pageY);
    if (element.classList.contains("box") && !element.classList.contains("selected")) {
        element.classList.add("selected")
    }
});

document.getElementsByClassName("sequencer")[0].addEventListener('contextmenu', (e) => {
    event.preventDefault();
    var element = document.elementFromPoint(e.pageX, e.pageY);
    if (element.classList.contains("box") && element.classList.contains("selected")) {
        element.classList.remove("selected")
    }
});

function playColumn(col) {
    //clear playing indicator
    for(var el of document.getElementsByClassName("sequencer")[0].getElementsByClassName("tracker")) {
        if (el.classList.contains("playing")) {
            el.classList.remove("playing");
        }
    }

    // indicate current col
    var current_tracker = document.getElementsByClassName("sequencer")[0].getElementsByClassName("tracker")[col];
    if (typeof current_tracker != "undefined")
        current_tracker.classList.add("playing");

    
    //play play
    for (var row of document.getElementsByClassName("sequencer")[0].getElementsByClassName("instrument")) {
        var instrument_name = row.getElementsByClassName("instrument_name").innerText;
        if (row.getElementsByClassName("box")[col].classList.contains('selected')) {
            //sound.play(instrument_name);
        }
    }
};

const interval = setInterval(function() {
    //console.log(current_row);
    playColumn(current_row);
    current_row += 1;
    if (current_row > 15) {
        current_row = 0;
    }
 }, 60000/4/bpm);

//clearInterval(interval);

})();