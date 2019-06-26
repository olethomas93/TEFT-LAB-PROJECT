
var Matrix = require('rpi-matrix');
var TextAnimation = require('../src/text-animation.js');
var Animation = require('rpi-animations').Animation;
var AnimationQueue = require('rpi-animations').Queue;


Matrix.configure({'led-cols':32, 'led-rows':32, 'led-chain':3,'led-parallel':2});

var queue = new AnimationQueue();

var A = new TextAnimation({text:'dette er en test'});



