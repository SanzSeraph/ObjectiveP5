/**
 * Bouncing Colorful Balls [Instance Mode] (v2.2.0)
 * AllOneString & GoToLoop (2016-Jun-28)
 *
 * Discourse.Processing.org/t/make-class-get-all-functions-of-p5-js/12558/2
 * Bl.ocks.org/GoSubRoutine/60b154e52336f7fee7c5f1fe817ceb22
 *
 * Forum.Processing.org/two/discussion/17306/multiple-canvases-on-one-page#Item_12
 * CodePen.io/GoSubRoutine/pen/KaerGb/right/?editors=101
*/

import Ball from "../../../dist/classes/ball.mjs";

function sketch(p) {
  const NUM = 15, balls = Array(NUM).fill();
  var bg;

  p.setup = function() {
    this.createCanvas(700, 700).mousePressed(reset);
    this.noStroke();

    bg = this.color(Array.from({ length: 3 }, () => ~~this.random(0xd0, 0x100)));

    for (var i = 0; i < NUM; balls[i++] = new Ball(this));    // instantiation via new
    for (var i = 0; i < NUM; balls[i++] = this.createBall()); // instantiation via method
  };

  p.draw = function() {
    this.background(bg);
    for (const b of balls)  b.display().update();
  };

  function reset() {
    for (var i = 0; i < 3; bg.levels[i++] = ~~p.random(0xd0, 0o400));
    for (const b of balls)  b.reset();
  }
};

new p5(sketch);
