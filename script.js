var fft
var amp
var volWave = []

var song

function preload() {
  song = loadSound('fur_elise.mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES)
  amp = new p5.Amplitude()
  song.play()
}

function draw() {
  background(30)
  
  StraightVis()
  // CircleVis()

  
}

function mouseClicked() {
  if(song.isPlaying()) {
    song.pause()
  } else {
    song.play()
  }
}

function keyTyped() {
  if (key === '1') {
    StraightVis()
  } else if (key === '2') {
    CircleVis()
  } else {
    return
  }
}

function StraightVis() {
  let vol = amp.getLevel()
  volWave.push(vol)
  
  beginShape()
  noFill()
  for (x = 0; x < volWave.length; x++) {
    stroke(255)
    let y = map(volWave[x], 0, 1, height, 0)
    vertex(x,y)
  }
  endShape()

  if (volWave.length > width) {
    volWave.splice(0,1)
  }
}

function CircleVis() {
  let vol = amp.getLevel();
  volWave.push(vol);

  translate(width/2, height/2 - 100)
  noFill();
  beginShape();
  for (let i = 0; i < 360; i++) {
    stroke(255);
    fill(255, 255, 0)
    let r = map(volWave[i], 0, 1, 10, 300);
    let x = r * cos(i);
    let y = r * sin(i);
    vertex(x, y);
  }
  endShape();

  if (volWave.length > 360) {
    volWave.splice(0,1)
  }
}