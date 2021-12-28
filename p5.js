let img;
let cnv;
let count = 0;
function preload() {
  img = loadImage("./assets/girl.png");
}
function setup() {
  cnv = createCanvas(img.width, img.height);
  let newCanvasX = (windowWidth - img.width) / 2;
  let newCanvasY = (windowHeight - img.height) / 2;
  // cnv.position(newCanvasX, newCanvasY);
  // cnv.position(50, 100);
  console.log("開始畫臉");
  // for (let col = 0; col < img.width; col++) {
  //   for (let row = 0; row < img.height; row++) {
  //     let c = img.get(col, row);
  //     stroke(color(c));
  //     point(col, row);
  //   }
  // }
  for (let col = 0; col < img.width; col++) {
    for (let row = 0; row < img.height; row++) {
      let xPos = col;
      let yPos = row;
      let c = img.get(xPos, yPos);
      push();
      translate(xPos, yPos);
      rotate(radians(random(360)));
      noFill();
      strokeWeight(random(3));
      stroke(color(c));
      curve(
        xPos,
        yPos,
        sin(xPos) * random(60),
        cos(xPos) * random(90),
        random(10),
        random(80),
        cos(yPos) * random(140),
        sin(yPos) * 50
      );
      pop();
    }
  }
  console.log("畫完了");
}

// function draw() {
//   console.log(count++);
// for (let col = 0; col < img.width; col++) {
//   for (let row = 0; row < img.height; row++) {
//     let xPos = col;
//     let yPos = row;
//     let c = img.get(xPos, yPos);
//     push();
//     translate(xPos, yPos);
//     rotate(radians(random(360)));
//     noFill();
//     strokeWeight(random(3));
//     stroke(color(c));
//     curve(
//       xPos,
//       yPos,
//       sin(xPos) * random(60),
//       cos(xPos) * random(90),
//       random(10),
//       random(80),
//       cos(yPos) * random(140),
//       sin(yPos) * random(60)
//     );
//     pop();
//   }
// }
// }
