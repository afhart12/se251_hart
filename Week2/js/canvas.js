// get the canvas
const c = document.querySelector(`canvas`);
const ctx = c.getContext(`2d`);

/* Notes
+x - moves right
-x - moves left
+y moves up
-y moves down
*/

// drawing a line
ctx.beginPath();
ctx.moveTo(20, 350);
ctx.lineTo(100, 350);
ctx.lineTo(100, 450);
ctx.lineTo(20, 450);
ctx.closePath();

ctx.fillStyle = "#00f2ff"; //color
// color can be named, hexadecimal, rgb, and rgba(with transparency included as a)
ctx.fill(); // fill it in

// drawing a rectangle
ctx.strokeRect(20, 20, 150, 100); // x, y, width, height

//draw a rectangle with a filled color
ctx.fillStyle = "darkblue";

ctx.fillRect(200, 20, 150, 100);

//draw a square
ctx.fillStyle = "black";
ctx.fillRect(300, 300, 150, 150);

// scaling the rectangle
ctx.scale(2, 2); // width, height
ctx.strokeRect(20, 30, 150, 200);

ctx.resetTransform(); //resets scale

ctx.save(); //checkpoint, saves canvas settings

    ctx.scale(2,2);

ctx.restore(); //restores canvas settings to latest save

ctx.save();

    ctx.translate(c.width / 2, c.height / 2);
    ctx.fillRect(0, 0, 100, 100);

    //draw a circle
    ctx.beginPath();
    ctx.arc(0, 0, 100, 0, 2 * Math.PI); //x, y, radius, start angle, end angle, pi, units are in radians

    //customize
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 50;
    ctx.fillStyle = "rgba(85, 255, 0, 0.5)";
    ctx.fill();
    ctx.stroke();

ctx.restore(); //undo translate back to the original grid of 0, 0

// new rect
ctx.beginPath();
ctx.rect(550, 550, 200, 200);
ctx.lineWidth = 10; //border line width
ctx.strokeStyle = rgb(220, 24, 125); //border color
ctx.fillStyle = rgb(0, 0, 0); //changes color inside of rect
ctx.fill();

ctx.stroke();

//example of writing solid text to the canvas
ctx.font = "30px Arial";
ctx.fillStyle = "blue";
ctx.fillText("Canvas Demo", 550, 50); // text, x, y, maxWidth

ctx.clearRect();

//drawing a house!!!!!!!!!
ctx.lineWidth = 5;
ctx.strokeRect(75, 140, 150, 110);

ctx.fillRect(130, 190, 40, 60);

ctx.beginPath();
ctx.lineTo(50, 140);
ctx.lineTo(150, 60);
ctx.lineTo(250, 140);
ctx.closePath(); //creates that clean edge at the end of your shape

// website three.js has amazing examples of 3d canvas use, inspect in chrome to see code





    